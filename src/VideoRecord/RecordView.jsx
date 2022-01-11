import React, { useEffect, useRef, useState } from 'react';

import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from 'react-media-recorder';

// export const RecordView = () => {
//   const { status, startRecording, stopRecording, mediaBlobUrl } =
//     useReactMediaRecorder({ video: true });

//   return (
//     <div>
//       <p>{status}</p>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <video src={mediaBlobUrl} controls autoPlay loop />
//     </div>
//   );
// };

export const RecordView = () => {
  // const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
  //   useReactMediaRecorder({ video: true });

  const {video} = useReactMediaRecorder({ video: true })
  // console.log(useReactMediaRecorder({ video: true }));
  console.log(video);

  const [videoS, setVideoS] = useState(null)
  return (
    <ReactMediaRecorder
      video
      render={({
        previewStream,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      }) => {
        console.log('previewStream--------', previewStream);
        return (
          <>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <VideoPreview stream={previewStream} />
            <video src={mediaBlobUrl} controls autoPlay loop />
          </>
        );
      }}
      onStop={(blobUrl,blob ) => setVideoS(blob)}
    />
  );
};

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }

  console.log('stream--------', stream);

  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};
