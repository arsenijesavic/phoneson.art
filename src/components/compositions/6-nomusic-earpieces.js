import React, { useEffect, useRef, useState } from "react";

const formatTime = (s) => {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
};

export default () => {
  const trackRef = useRef();
  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   if (trackRef.current) {
  //     setCurrentTime(trackRef.current.currentTime);
  //     setDuration(trackRef.current.duration);
  //   }
  // }, [trackRef]);

  const playTrack = () => {
    try {
      trackRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const pauseTrack = () => {
    try {
      trackRef.current.pause();
      setIsPlaying(false);
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  return (
    <div className="px-8 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {isPlaying ? (
          <button className="text-green-500" onClick={pauseTrack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                // fill="#4B5563"
                className="fill-current"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button className="text-green-500" onClick={playTrack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                className="fill-current"
                // fill="#4B5563"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 text-center">
        {duration && (
          <p className="text-gray-300 p-4">
            {formatTime(currentTime)} / {duration && formatTime(duration)}
          </p>
        )}

        <progress className="w-full h-6" id="file" max="100" value={progress} />
      </div>

      <audio
        // style={{ visibility: "hidden" }}
        ref={trackRef}
        controls={false}
        src="/assets/6-nomusic-earpieces/David Helbich - NO MUSIC - earpieces (remix 2) (1).mp3"
        // preload="metadata"
        onLoadedMetadata={() => {
          // console.log("done");
          setCurrentTime(trackRef.current.currentTime);
          setDuration(trackRef.current.duration);
        }}
        onTimeUpdate={(e) => {
          const currentTime = e.target.currentTime;
          const progress = (currentTime / duration) * 100;
          setCurrentTime(e.target.currentTime);
          setProgress(progress);
        }}
      />
    </div>
  );
};

//

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_TIME": {
//       return {
//         ...state,
//         currentTime: action.payload,
//       };
//     }

//     case "SET_PLAYING": {
//       return {
//         ...state,
//         isPlaying: action.payload,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

// const initalState = {
//   currentTime: 0,
//   duration: 0,
//   isPlaying: false,
//   progress: 0,
// };

// export default () => {
//   const [analyser, setAnalyser] = React.useState();
//   const [player, setPlayer] = React.useState();
//   const [state, dispatch] = useReducer(reducer, initalState);
//   const requestRef = React.useRef();

//   const animate = (time) => {
//     // setNotes(updateNotes);
//     const values = analyser?.getValue();
//     console.log(values);
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, [analyser]);

//   const playTrack = () => {
//     player.start();

//     dispatch({ type: "SET_PLAYING", payload: true });
//   };
//   const pauseTrack = () => {
//     player.stop();
//     dispatch({ type: "SET_PLAYING", payload: false });
//   };

//   const { currentTime, duration, isPlaying, progress } = state;

//   useEffect(() => {
//     const track = `/assets/6-nomusic-earpieces/drone.wav`;
//     // const track = `/assets/7-menuer4phones/drone.wav`;
//     const player = new Tone.Player(track);
//     // player.loop = true;
//     // player.autostart = false;
//     // player.loopStart = 1.0;
//     player.toMaster();
//     setPlayer(player);

//     const analyser = new Tone.Analyser("waveform", 128);
//     player.connect(analyser);
//     setAnalyser(analyser);

//     console.log(player.state, player);
//   }, []);

//   return (
//     <div className="px-8 h-full">
//       <div>
//         <progress className="w-full" id="file" max="100" value={progress} />
//         {currentTime !== "NaN" && (
//           <p className="text-gray-300">
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </p>
//         )}
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         {isPlaying ? (
//           <button className="text-green-500" onClick={pauseTrack}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="256"
//               height="256"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 // fill="#4B5563"
//                 className="fill-current"
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         ) : (
//           <button className="text-green-500" onClick={playTrack}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="256"
//               height="256"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 className="fill-current"
//                 // fill="#4B5563"
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
