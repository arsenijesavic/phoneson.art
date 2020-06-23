import React, { useEffect, useRef } from "react";

export default () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoRef = useRef();

  useEffect(() => {
    document.addEventListener("fullscreenchange", function (e) {
      setIsPlaying((isPlaying) => !isPlaying);
    });
    // return () => {
    //   document.removeEventListener("fullscreenchange");
    // };
  }, [setIsPlaying]);

  const playVideo = () => {
    // const screen = window.screen;

    // screen.lockOrientationUniversal = (mode) =>
    //   (screen.orientation &&
    //     screen.orientation.lock(mode).then(
    //       () => {},
    //       (err) => console.log(err)
    //     )) ||
    //   (screen.mozLockOrientation && screen.mozLockOrientation(mode)) ||
    //   (screen.msLockOrientation && screen.msLockOrientation(mode));
    // screen.lockOrientationUniversal("landscape");

    const video = videoRef.current;
    video.play();
    video.requestFullscreen();
  };

  return (
    <div className="px-8 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <button className="text-green-500" onClick={playVideo}>
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
        <video
          style={{ visibility: isPlaying ? "visible" : "hidden" }}
          ref={videoRef}
          // className="w-full h-full object-cover absolute top-0 left-0"
          controls={true}
          src="/assets/5-the-upgrade/lampa.mp4"
        />
      </div>
    </div>
  );
};
