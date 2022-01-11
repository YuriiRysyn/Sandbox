import React, { useEffect, useState } from 'react';
// import { FacebookButton, FacebookCount } from 'react-social';

// import { Helmet } from 'react-helmet';
import { VideoPlayer } from './SpeakingTest/VideoPlayer.js';
// import './App.scss';
// import { FacebookMessengerShareButton, FacebookShareButton } from 'react-share';
import { RubricSelector } from './RubricSelector/RubricSelector.jsx';
import { RecordView } from './VideoRecord/RecordView.jsx';

function App() {
  const player = React.createRef();
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(false);
  const [playerParams, setPlayerParams] = useState({
    isPlaying: false,
    playedSeconds: '',
    loadedSeconds: '',
  });

  const handleProgress = progress => {
    // const currentPlayedSeconds = Math.round(progress.playedSeconds);
    const currentPlayedSeconds = Math.round(progress);
    const currentLoadedSeconds = Math.round(progress.loadedSeconds);

    setPlayerParams({
      ...playerParams,
      playedSeconds: currentPlayedSeconds,
      loadedSeconds: currentLoadedSeconds,
    });
  };

  const url = 'https://yuriirysyn.github.io/Sandbox/';
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
      {/* <h1>Hello form App JSx</h1> */}

      {/* <RecordView /> */}
      <div>
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
      </div>
    </>
  );
}

export default App;
