import React, { useEffect, useState } from 'react';
// import TypeScriptDev from './TypeScriptDev.tsx';
// import Player from './Player';
// import VideoPart from './SpeakingTest/VideoPart/VideoPart';
// import { AppCircle } from './Circle/AppCircle';
// import { WaweSound } from './WaweSound/WaweSound';

// import { Timer } from './Timer/Timer';

import { VideoPlayer } from './SpeakingTest/VideoPlayer.js';
import './App.scss';

function App() {
  const player = React.createRef({});
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(false);
  const [playerParams, setPlayerParams] = useState({
    isPlaying: false,
    playedSeconds: '',
    loadedSeconds: '',
  });

  const handleProgress = progress => {
    alert('progress--', progress);
    // const currentPlayedSeconds = Math.round(progress.playedSeconds);
    const currentPlayedSeconds = Math.round(progress);
    const currentLoadedSeconds = Math.round(progress.loadedSeconds);

    setPlayerParams({
      ...playerParams,
      playedSeconds: currentPlayedSeconds,
      loadedSeconds: currentLoadedSeconds,
    });
  };
  // const [isPlaying, setIsPlaying] = useState(false);

  // if (player.current) {
  //   player.current.ontimeupdate = handleProgress;
  // }

  // useEffect(() => {
  //   if (!isPlaying && playerParams.isPlaying) {
  //     setIsPlaying(true);
  //   } else if (isPlaying && !playerParams.isPlaying) {
  //     setIsPlaying(false);
  //   }
  // }, [playerParams]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!isPlaying) {
  //       // player.current.pause();
  //     } else {
  //       player.current.play();
  //     }
  //   }, 1);
  // }, [isPlaying]);
  return (
    <>
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
            // setPlayerParams({ ...playerParams, isPlaying: false });
            // setTimeout(() => {
            //   setPlayerParams({ ...playerParams, isPlaying: true });
            // }, 100);
            setPlayerParams({ ...playerParams, isPlaying: true });

            // player.current.play()
          }}
        >
          Play {player.current}
        </button>
      )}
    </>
  );
}

export default App;
