import React, { useEffect, useState } from 'react';
import { FacebookButton, FacebookCount } from 'react-social';

import { Helmet } from 'react-helmet';
import { VideoPlayer } from './SpeakingTest/VideoPlayer.js';
import './App.scss';
import { FacebookMessengerShareButton, FacebookShareButton } from 'react-share';

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
      {/* <Helmet>
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
      </Helmet> */}
      <FacebookShareButton url={url} appId={'4634286036628789'}>
        {/* <FacebookCount url={url} /> */}
        {' Share ' + url}
      </FacebookShareButton>
    </>
    // <div>

    //   <VideoPlayer
    //     player={player}
    //     isAutoPlayEnabled={isAutoPlayEnabled}
    //     setIsAutoPlayEnabled={setIsAutoPlayEnabled}
    //     playerParams={playerParams}
    //     handleProgress={handleProgress}
    //   />
    //   <p>{playerParams.playedSeconds}</p>
    //   {!isAutoPlayEnabled && (
    //     <button
    //       onClick={() => {
    //         // setPlayerParams({ ...playerParams, isPlaying: false });
    //         // setTimeout(() => {
    //         //   setPlayerParams({ ...playerParams, isPlaying: true });
    //         // }, 100);
    //         setPlayerParams({ ...playerParams, isPlaying: true });

    //         // player.current.play()
    //       }}
    //     >
    //       Play {player.current}
    //     </button>
    //   )}
    // </div>
  );
}

export default App;
