import React, { useState } from 'react';
// import TypeScriptDev from './TypeScriptDev.tsx';
// import Player from './Player';
// import VideoPart from './SpeakingTest/VideoPart/VideoPart';
// import { AppCircle } from './Circle/AppCircle';
// import { WaweSound } from './WaweSound/WaweSound';

// import { Timer } from './Timer/Timer';

import { VideoPlayer } from './SpeakingTest/VideoPlayer.js';
import './App.scss';

function App() {
  const player = React.createRef();
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(false);
  const [playerParams, setPlayerParams] = useState({
    isPlaying: true,
    playedSeconds: '',
    loadedSeconds: '',
  });

  const handleProgress = progress => {
    const currentPlayedSeconds = Math.round(progress.playedSeconds);
    const currentLoadedSeconds = Math.round(progress.loadedSeconds);

    setPlayerParams({
      ...playerParams,
      playedSeconds: currentPlayedSeconds,
      loadedSeconds: currentLoadedSeconds,
    });
  };

  // let [count, setCount] = useState(0);

  // const dec = () => {
  //   setCount(prev => prev + 1);
  //   console.log(count);
  //   setCount(prev => prev + 1);
  //   console.log(count);

  //   setCount(prev => prev + 1);
  //   console.log(count);
  // };
  return (
    <>
      {/* <TypeScriptDev /> */}
      {/* <div className="container">
      <div className="row">
        <div className="col">
          FORM
        </div>
      </div>
      <div className="row">
        <div className="col">
          Posts
        </div>
        <div className="col">
          Fethced posts
        </div>
      </div>
    </div> */}

      {/* <AppCircle /> */}
      {/* <WaweSound /> */}
      {/* <Timer /> */}
      <VideoPlayer
        player={player}
        isAutoPlayEnabled={isAutoPlayEnabled}
        setIsAutoPlayEnabled={setIsAutoPlayEnabled}
        playerParams={playerParams}
        handleProgress={handleProgress}
      />
      <p>{playerParams.playedSeconds}</p>
      {!isAutoPlayEnabled && (
        <button
          onClick={() => {
            setPlayerParams({ ...playerParams, isPlaying: false });
            setTimeout(() => {
              setPlayerParams({ ...playerParams, isPlaying: true });
            }, 1);
          }}
        >
          Play{' '}
        </button>
      )}
    </>
  );
}

export default App;
