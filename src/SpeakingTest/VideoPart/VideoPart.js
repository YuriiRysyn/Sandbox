import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
// import ReactPlayer from "react-player/file";
// const SpinnerView = require("../../SpinnerView.react");

const VideoPlayer = React.lazy(() =>
    import(/*webpackChunkName: "VideoPlayer"*/ "../VideoPlayer")
);

// import VideoPlayer from "./VideoPlayer/VideoPlayer";

// import Button from "./Button/Button";

// const SpeackingTest = React.lazy(() =>
// import(/*webpackChunkName: "SpeackingTest",
// webpackPrefetch: true*/ "./containers/ReactVideo/SpeackingTest")
// );

// import "./SpeakingTest.css";

const VideoPart = props => {
    const player = React.createRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [choosenQuestion, setChoosenQuestion] = useState(undefined);
    const [played, setPlayed] = useState(0);
    const [isBegin, setIsBegin] = useState(true);

    const [activeFaze, setActiveFaze] = useState(null);
    const [activeMediaTag, setActiveMediaTag] = useState(null);

    // const timer = useRef(0);

    // const [ timer, setTimer ] = useState(0);
    useEffect(
        () => {
            if (choosenQuestion === 2 && played === 30) {
                setIsPlaying(false);
            }

            if (choosenQuestion === 1 && played === 20) {
                setIsPlaying(false);
            }

            if (choosenQuestion === 3 && played === 40) {
                setIsPlaying(false);
            }

            if (choosenQuestion === 4 && played === 50) {
                setIsPlaying(false);
            }
        },
        [played]
    );

    const btnStyle = {
        color: "green",
        borderRadius: "20px",
        width: "100px",
        height: "50px"
    };

    const questionNumStyle = {
        color: "green",
        borderRadius: "20px",
        width: "100px",
        height: "50px"
    };
    const handleDuration = duration => {
        console.log("onDuration", duration);
        // this.setState({ duration })
    };

    const handleProgress = progress => {
        console.log(progress);
        setPlayed(Math.floor(progress.playedSeconds));
    };

    const startTimer = choosenQuestion => {
        setPlayed(choosenQuestion);
    };

    useEffect(
        () => {
            if (player.current) {
                if (choosenQuestion) {
                    player.current.seekTo(10 * choosenQuestion);
                    startTimer(10 * choosenQuestion);
                }

                console.log(choosenQuestion);
                console.log(player.current.getCurrentTime());
            }
        },
        [choosenQuestion]
    );

    const choseQuestion = e => {
        setChoosenQuestion(+e.target.value);
        setIsPlaying(true);
    };

    // const currentTime = player.current ? player.current.getCurrentTime() : 0;
    // const duration = player.current ? player.current.getDuration() : 0;

    return (
        <Fragment>
            {/* <ReactPlayer
                ref={player}
                className="react-player"
                // url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
                // url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                // url='./speak-test.mp3'
                controls={false}
                width="600px"
                height="600px"
                playing={isPlaying}
                playsinline={true}
                onDuration={handleDuration}
                onProgress={handleProgress}
                // starttime={12}
                // onStart={20}
                start={12}
                end={22}
                muted={true}
            /> */}
            <React.Suspense fallback={'Loading...'}>
                <VideoPlayer
                    player={player}
                    className="react-player"
                    url={
                        "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
                    }
                    isPlaying={isPlaying}
                    handleDuration={handleDuration}
                    handleProgress={handleProgress}
                />
            </React.Suspense>

            <h2>
                <span>{played}</span>
            </h2>
            <button style={btnStyle} onClick={() => setIsPlaying(true)}>
                Show Sample Test
            </button>

            {/* <button onClick={() => player.current.seekTo(10)}>Seek to 00:10</button> */}

            <select
                name=""
                id=""
                value={choosenQuestion}
                onChange={choseQuestion}
                style={questionNumStyle}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </Fragment>
    );
};

export default VideoPart;
