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

const Img = ({ aspectRatio, src, style }) => {
  return (
    <div
      style={{
        height: "0",
        overflow: "hidden",
        position: "relative",
        paddingBottom: `calc(100% / ${aspectRatio})`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 rounded-20">
        <img className="image-full rounded-20" src={src} alt="" style={style} />
      </div>
    </div>
  );
};

export default Img;
