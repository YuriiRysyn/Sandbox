import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
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

  // useEffect(() => {
  //   const meta1 = document.createElement('meta');
  //   meta1.setAttribute('property', 'og:title');
  //   meta1.setAttribute('content', 'Speechace speaking test');
  //   document.head.appendChild(meta1);

  //   // <meta property="og:title" content="Speechace speaking test" />

  //   const meta2 = document.createElement('meta');
  //   meta2.setAttribute('property', 'og:type');
  //   meta2.setAttribute('content', 'website');
  //   document.head.appendChild(meta2);
  //   // <meta property="og:type" content="website" />

  //   const meta3 = document.createElement('meta');
  //   meta3.setAttribute('property', 'og:image');
  //   meta3.setAttribute(
  //     'content',
  //     'https://picsum.photos/id/52/1200/600'
  //   );
  //   document.head.appendChild(meta3);
  //   // <meta property="og:image" content="https://picsum.photos/id/52/1200/600" />

  //   const meta4 = document.createElement('meta');
  //   meta4.setAttribute('property', 'og:description');
  //   meta4.setAttribute(
  //     'content',
  //     'Speechace speaking test result for'
  //   );
  //   document.head.appendChild(meta4);
  //   // <meta property="og:description" content="Speechace speaking test result for " />

  //   const meta5 = document.createElement('meta');
  //   meta5.setAttribute('property', 'og:url');
  //   meta5.setAttribute(
  //     'content',
  //     'https://www.speechace.com/speaking-test/'
  //   );
  //   document.head.appendChild(meta5);
  //   // <meta property="og:url" content="https://www.speechace.com/speaking-test/" />
  // }, []);

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
    <div>
      <Helmet>
        <meta property="og:title" content="Speechace speaking test" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://picsum.photos/id/52/1200/600"
        />
        <meta
          property="og:description"
          content="Speechace speaking test result for "
        />
        <meta
          property="og:url"
          content="https://www.speechace.com/speaking-test/"
        />
      </Helmet>

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
  );
}

export default App;
