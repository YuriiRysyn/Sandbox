import React from 'react';
import { useState } from 'react';

import './Timer.scss';

export const Timer = ({ prep = true, timer = '' }) => {
  // let countdown = 30;

  let [countdown, setCountdown] = useState(60);

  setInterval(function () {
    setCountdown((countdown = --countdown <= 0 ? 60 : countdown));
  }, 1000);
  return (
    <div className="Timer">
      <div className="Timer-number">{countdown} </div>

      <svg className='backgound-circle'>
        <circle r="30" cx="40" cy="40"></circle>
      </svg>

      <svg
        className={`Timer-svg ${
          prep ? 'Timer__prep-timer' : 'Timer__record-timer'
        }`}
      >
        <circle r="30" cx="40" cy="40"></circle>
      </svg>
    </div>
  );
};
