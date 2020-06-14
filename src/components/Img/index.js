import React from "react";

// .aspect-ratio-box-inside {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .aspect-ratio-story {
//   height: 0;
//   overflow: hidden;
//   position: relative;
//   padding-top: 177.7777777778%;
//   padding-top: calc(5 / 4 * 100%);
// }

const Img = ({ aspectRatio, src }) => {
  return (
    <div
      style={{
        height: "0",
        overflow: "hidden",
        position: "relative",
        // paddingTop: `56.25%`,
        // calc(${aspectRatio} * 100%)
        paddingBottom: `calc(100% / ${aspectRatio})`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 rounded-lg overflow-hidden">
        <img className="image-full" src={src} alt="" />
      </div>
    </div>
  );
};

export default Img;
