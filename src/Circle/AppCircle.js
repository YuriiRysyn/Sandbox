/*eslint-disable*/
import React, { useRef, useState, useEffect, useMemo, memo } from 'react';
import { getStrokeArc } from './getStrokeArc';

import styles from './App.module.css';

const Path = ({ path: { path, endCoors } }) => {
  return (
    <>
      <path className={styles.path} d={path} />
      <circle
        className={styles.circle}
        cx={endCoors.x}
        cy={endCoors.y}
        r="10"
      />
    </>
  );
};

export const AppCircle = () => {
  const path1 = getStrokeArc(-90, 60, 120, 150, 150, false);
  const path2 = getStrokeArc(60, 270, 120, 150, 150, false);

  return (
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 300 300">
        <defs>
          <linearGradient id="bones-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FF9133' }} />
            <stop offset="100%" style={{ stopColor: '#FF0015' }} />
          </linearGradient>
        </defs>

        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* <filter id="dropshadow" x="-2" y="-2" width="200" height="200">
          <feGaussianBlur stdDeviation="1" />
        </filter> */}

        <path className={`${styles.path} ${styles.purple} blur`} d={path1.path} />
        <path
          className={`${styles.path} ${styles.orange}`}
          d={path2.path}
          stroke="url(#bones-gradient)"
          fill="url(#dropshadow)"
        />

        <circle
          className={`${styles.circle} ${styles.purple}`}
          cx={path1.endCoors.x}
          cy={path1.endCoors.y}
          r="10
          "
        />
        <circle
          className={`${styles.circle} ${styles.orange}`}
          cx={path2.endCoors.x}
          cy={path2.endCoors.y}
          stroke="url(#bones-gradient)"
          r="10"
        />
      </svg>
    </div>
  );
};

// export function CircleGraph({
//   bondLogo,
//   data,
//   radius,
//   innerRadius = 0.7,
// }: Props) {
//   const [graphData, setGraphData] = useState(
//     convertData(data, radius, innerRadius),
//   );
//   useEffect(() => {
//     setGraphData(convertData(data, radius, innerRadius));
//   }, [data, radius, innerRadius]);

//   const config = {
//     series: [44, 55, 41],
//     labels: ['Apple', 'Mango', 'Banana'],
//     options: {
//       chart: {
//         width: 380,
//         type: 'donut' as 'donut',
//       },
//       stroke: {
//         width: 2,
//         lineCap: 'round' as 'round',
//       },
//       plotOptions: {
//         pie: {
//           // customScale: 0.5,
//           startAngle: -90,
//           endAngle: 270,
//           dataLabels: {
//             offset: 2,
//             minAngleToShowLabel: 20,
//           },
//           donut: {
//             size: '65%',
//             background: 'transparent',
//             labels: {
//               show: false,
//               name: {
//                 show: true,
//                 fontSize: '22px',
//                 fontFamily: 'Helvetica, Arial, sans-serif',
//                 fontWeight: 600,
//                 color: 'red',
//                 offsetY: -10,
//                 formatter: function (val) {
//                   return val;
//                 },
//                 value: {
//                   show: true,
//                   fontSize: '56px',
//                   fontFamily: 'Helvetica, Arial, sans-serif',
//                   fontWeight: 400,
//                   color: 'red',
//                   offsetY: 16,
//                   formatter: function (val) {
//                     return val;
//                   }
//                 },
//               },
//             },
//           },
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       fill: {
//         type: 'gradient',
//       },
//       legend: {
//         show: false,
//       },
//       markers: {
//         shape: 'circle' as 'circle',
//         width: 12,
//         height: 12,
//         radius: 12,
//       },
//     },
//   };

//   return (
//     <Div>
//       {bondLogo && <BondLogoItem radius={radius} />}
//       <ReactApexChart
//         options={config.options}
//         series={config.series}
//         type="donut"
//         height={radius}
//       />
//     </Div>
//   );
// }
