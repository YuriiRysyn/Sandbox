const toFixedNumber = (number, x) => {
  const pow = 10 ** x;
  return +(Math.round(number * pow) / pow);
};

const SmallArc = (A1, A2, R, Cx, Cy) => {
  const sin = angle => Math.sin(angle) * R;
  const cos = angle => Math.cos(angle) * R;

  const StartAngle = A1 * (Math.PI / 180);
  const EndAngle = A2 * (Math.PI / 180);
  const halfAngle = (EndAngle - StartAngle) / 2;
  const K = (4 / 3) * ((1 - Math.cos(halfAngle)) / Math.sin(halfAngle));

  const p1x = toFixedNumber(Cx + cos(StartAngle), 2);
  const p1y = toFixedNumber(Cy + sin(StartAngle), 2);
  const p4x = toFixedNumber(Cx + cos(EndAngle), 2);
  const p4y = toFixedNumber(Cy + sin(EndAngle), 2);
  const p2x = toFixedNumber(p1x - K * sin(StartAngle), 2);
  const p2y = toFixedNumber(p1y + K * cos(StartAngle), 2);
  const p3x = toFixedNumber(p4x + K * sin(EndAngle), 2);
  const p3y = toFixedNumber(p4y - K * cos(EndAngle), 2);
  const curve = `${p1x} ${p1y} C ${p2x} ${p2y} ${p3x} ${p3y} ${p4x} ${p4y} `;

  return {
    curve,
    p4x,
    p4y,
  };
};

export const getStrokeArc = (startAngle, endAngle, radius, Cx, Cy, isInner) => {
  if (
    typeof startAngle !== 'number' ||
    typeof endAngle !== 'number' ||
    typeof radius !== 'number' ||
    typeof Cx !== 'number' ||
    typeof Cy !== 'number'
  )
    return '';

  const sgn = startAngle < endAngle ? 1 : -1;
  const startPoint = isInner ? 'L ' : 'M ';
  const Arc = [];
  const endCoors = { x: 0, y: 0 };

  let a2;
  let M;
  let totalAngle;
  let a1 = startAngle;

  for (totalAngle = Math.min(360, sgn * (endAngle - startAngle)); totalAngle > 0; '') {
    a2 = a1 + sgn * Math.min(totalAngle, 90);
    M = a1 === startAngle ? startPoint : 'L ';

    const arc = SmallArc(a1, a2, radius, Cx, Cy);
    Arc.push(M, arc.curve);
    endCoors.x = arc.p4x;
    endCoors.y = arc.p4y;

    totalAngle -= Math.abs(a2 - a1);
    a1 = a2;
  }

  return {
    path: Arc.join(''),
    endCoors,
  };
};
