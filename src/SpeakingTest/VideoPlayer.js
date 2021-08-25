import React from 'react';
import ReactPlayer from 'react-player/file';
import canAutoPlay from 'can-autoplay';

export const VideoPlayer = props => {
  const { player } = props;

  // canAutoPlay
  //     .video({timeout: 100, muted: true})
  //     .then(({result, error}) => {
  //         if(result === false){
  //             console.warn('Error did occur: ', error)
  //         }
  //     })
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return (
    <ReactPlayer
      ref={player}
      className="react-player"
      // url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // url={url}
      url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
      // url="https://d1dgcz2mzc8ifr.cloudfront.net/speaking-test-3qs-jack/index.m3u8"
      controls={false}
      width="320px"
      // height="600px"
      playing={true}
      playsinline={true}
      config={{
        file: {
          forceHLS: true,
          forceVideo: true,
          hlsVersion: '0.12.4',
          attributes: {
            // poster: feed && feed.actionUrl && feed.actionUrl.image,
            disablePictureInPicture: true,
          },
        },
      }}
      // onDuration={handleDuration}
      // onProgress={handleProgress}
      // starttime={12}
      // onStart={20}
      // start={12}
      // end={22}
      // muted={true}
    />
  );
};

// export default VideoPlayer;