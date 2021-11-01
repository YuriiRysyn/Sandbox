import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/file';

export const VideoPlayer = ({
  player,
  isAutoPlayEnabled,
  setIsAutoPlayEnabled,
  playerParams,
  handleProgress,
}) => {
  const checkAutoPlay = () => {
    if (!isAutoPlayEnabled) {
      setIsAutoPlayEnabled(true);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying && playerParams.isPlaying) {
      setIsPlaying(true);
      player.current.play();

    } else if (isPlaying && !playerParams.isPlaying) {
      setIsPlaying(false);
      player.current.pause();

    }
  }, [playerParams]);

  console.log('isPlayin---', isPlaying);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!isPlaying) {
  //       // player.current.pause();
  //     } else {
  //       player.current.play();
  //     }
  //   }, 1);
  // }, [isPlaying]);
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // useEffect(() => {
  //   player.current = document.getElementById ("myVideo");
  // },[])
  return (
    // <ReactPlayer
    //   ref={player}
    //   className="react-player"
    //   // url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    //   // url={url}
    //   // url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    //   controls={false}
    //   // url="https://d1dgcz2mzc8ifr.cloudfront.net/speaking-test-3qs-jack/index.m3u8"
    //   url="https:///speaking-test-videos.s3.us-west-2.amazonaws.com/speaking-test-3qs-james/index.m3u8"
    //   width="320px"
    //   // height="600px"
    //   playing={playerParams.isPlaying}
    //   playsinline={true}
    //   // config={{
    //   //   file: {
    //   //     forceHLS: true,
    //   //     forceVideo: true,
    //   //     hlsVersion: '0.12.4',
    //   //     attributes: {
    //   //       // poster: feed && feed.actionUrl && feed.actionUrl.image,
    //   //       disablePictureInPicture: true,
    //   //     },
    //   //   },
    //   // }}
    //   // onDuration={handleDuration}
    //   // onProgress={handleProgress}
    //   // starttime={12}
    //   // onStart={20}
    //   // start={12}
    //   // end={22}
    //   // muted={true}
    //   onProgress={handleProgress}
    //   onStart={checkAutoPlay}
    //   // muted={true}
    //   volume={0.1}
    // />

    <>
    <video
      ref={player}
      width={600}
      height="100%"
      // controls={true}
      playsInline
      ontimeupdate={handleProgress}
      ontimeupdate={() => 'dasdsa'}
      id="myVideo"
      // isPlaying={playerParams.isPlaying}
    >
      <source
        src={
          'https://d1dgcz2mzc8ifr.cloudfront.net/speaking-test-3qs-jack/index.m3u8'
        }
        type="application/x-mpegURL"
      />
    </video>
        <button onClick={() => player.current.currentTime = 10}>
          go to 10s
        </button>
    </>
  );
};

// export default VideoPlayer;
