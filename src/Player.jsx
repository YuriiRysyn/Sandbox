import React, {useState} from 'react';
import { Player, ControlBar, PlayToggle, BigPlayButton ,LoadingSpinner, ReplayControl, ForwardControl, VolumeMenuButton } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";

export default props => {
//   const { player } = Player.getState();
// console.log(player );
const [state, setState ] = useState(65);
console.log(state)
  return (
    // <>
      <Player
        // ref={Player}
        // playsInline
        // poster="https://mastertura.com.ua/files/upload/news/new_2752/img.jpg"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        fluid={false}
        width={900}
        heigth={600}
        autoPlay
        // videoWidth={300}
        startTime={30}
        endTime={35}
      >

      <LoadingSpinner />
      <BigPlayButton position="center" />

        <ControlBar autoHide={true} className="my-class" disableCompletely={false} >
          <PlayToggle disableCompletely={true} />
          <ReplayControl seconds={5} order={2.1} />
          <ReplayControl seconds={10} order={2.2} />
          <ReplayControl seconds={30} order={2.3} />
          <ForwardControl seconds={10} order={3.2} />
          <VolumeMenuButton vertical disableCompletely={true}/>
        </ControlBar>

      </Player>

    // </>
  );
};