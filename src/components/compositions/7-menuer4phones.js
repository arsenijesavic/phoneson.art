import React, { forwardRef, useState } from "react";
import { useRouter } from "next/router";
import { get } from "lib/api";

// import styled from "styled-components";

const Trigger = ({ title, src, background, color }) => {
  const sound = React.createRef();

  const _handlePress = () => {
    sound.current.currentTime = 0;
    sound.current.play();
  };

  return (
    <button
      style={{ background, color, minWidth: "50%" }}
      className="text-center text-4xl flex justify-center items-center flex-1 bg-red-500 text-black"
      onClick={_handlePress}
    >
      {title}
      <audio ref={sound} src={src} />
    </button>
  );
};

const data = [
  {
    title: "1",
    background: "#ED247B",
    color: "white",
    src: "/assets/7-menuer4phones/A/0.mp3",
  },

  {
    title: "4",
    background: "white",
    color: "#ED247B",
    src: "/assets/7-menuer4phones/A/3.mp3",
  },

  {
    title: "2",
    background: "#FB932D",
    color: "white",
    src: "/assets/7-menuer4phones/A/1.mp3",
  },
  {
    title: "5",
    background: "white",
    color: "#FB932D",
    src: "/assets/7-menuer4phones/A/4.mp3",
  },

  {
    title: "3",
    color: "white",
    background: "#B153E9",
    src: "/assets/7-menuer4phones/A/2.mp3",
  },

  {
    title: "6",
    color: "#B153E9",
    background: "white",
    src: "/assets/7-menuer4phones/A/5.mp3",
  },

  // {
  //   title: "7",
  //   color: "red",
  //   background: "black",
  //   src: "/assets/7-menuer4phones/A/Sound5.mp3",
  // },
];

const data2 = [
  {
    title: "1",
    background: "#DC3245",
    color: "white",
    src: "/assets/7-menuer4phones/B/0.mp3",
  },
  {
    title: "4",
    background: "white",
    color: "#DC3245",
    src: "/assets/7-menuer4phones/B/3.mp3",
  },
  {
    title: "2",
    background: "#696591",
    color: "white",
    src: "/assets/7-menuer4phones/B/1.mp3",
  },
  {
    title: "5",
    background: "white",
    color: "#696591",
    src: "/assets/7-menuer4phones/B/4.mp3",
  },
  {
    title: "3",
    background: "#1A9BBC",
    color: "white",
    src: "/assets/7-menuer4phones/B/2.mp3",
  },
  {
    title: "6",
    background: "white",
    color: "#1A9BBC",
    src: "/assets/7-menuer4phones/B/5.mp3",
  },
];

const data3 = [
  {
    title: "The End",
    background: "white",
    color: "#1A9BBC",
    src: "/assets/7-menuer4phones/C/J.S.Bach - Menuet.mp3",
  },
];

export default ({ composition }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="w-full flex-1 flex flex-col items-stretch">
      <header className="py-4">
        <div className="flex-1">
          <ul className="flex bg-gray-900 text-gray-100 text-center">
            {["Set A", "Set B", "Set C"].map((name, index) => (
              <li
                className={`flex-1 p-4 cursor-pointer border-red-500 ${
                  index === selectedTab && "border-b-2"
                } `}
                onClick={() => setSelectedTab(index)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* SoundBoard */}
      {selectedTab === 0 && (
        <div id="keys" className="flex-1 flex flex-wrap items-stretch">
          {data && data.map((byte, index) => <Trigger key={index} {...byte} />)}
        </div>
      )}

      {selectedTab === 1 && (
        <div id="keys" className="flex-1 flex flex-wrap items-stretch">
          {data2 &&
            data2.map((byte, index) => <Trigger key={index} {...byte} />)}
        </div>
      )}

      {selectedTab === 2 && (
        <div id="keys" className="flex-1 flex flex-wrap items-stretch">
          {data3 &&
            data3.map((byte, index) => <Trigger key={index} {...byte} />)}
        </div>
      )}
    </div>
  );
};

export async function getStaticProps({ params }) {
  const [composition] = await get(
    `*[_type == 'composition' && slug == '/compositions/menuer4phones']|order(date desc) [0..10]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );

  return {
    props: { composition },
  };
}

// const IndexPage = () => {
//   const [machine, setState] = useState({ state: "NOISE" });

//   return (
//     <Layout strech title="LIVE 🔴">
//       {machine.state === "MENUET4PHONES_SCENE_1" && <SoundBoard data={data} />}
//       {machine.state === "MENUET4PHONES_SCENE_2" && <SoundBoard data={data2} />}
//       {machine.state === "MENUET4PHONES_SCENE_3" && (
//         <div style={{ width: "100vw", height: "100vh" }}>
//           <img
//             style={{
//               display: "block",
//               height: "100%",
//               objectFit: "contain",
//               margin: "0 auto"
//             }}
//             src="images/jsbach.jpg"
//             alt=""
//           />
//           <h1
//             style={{
//               backgroundColor: "black",
//               fontSize: "48px",
//               textAlign: "center",
//               padding: "1rem",
//               width: "100%",
//               position: "fixed",
//               left: "50%",
//               bottom: 0,
//               transform: "translate(-50%,0%)"
//             }}
//           >
//             J. S. Bach - Menuet
//           </h1>
//           <Audio autoPlay={true} src="sounds/jsbach-menuet.mp3" />
//         </div>
//       )}

//       {machine.state === "NOISE" && (
//         <div style={{ width: "100vw", height: "100vh" }}>
//           <img
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             src="images/noise.gif"
//             alt=""
//           />
//           <Audio autoPlay={true} src="sounds/white-noise.wav" />
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default IndexPage;

// import { useRouter } from "next/router";
// import { get } from "lib/api";
// import ReactMarkdown from "react-markdown/with-html";

// export default ({ composition }) => {
//   const router = useRouter();

//   return (
//     <div className="w-full min-h-screen">
//       <header className="flex justify-between items-center p-4">
//         <div onClick={() => router.back()}>
//           <svg
//             width="32"
//             height="32"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//             className="fill-current text-teal-500"
//           >
//             <path d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
//           </svg>
//         </div>
//         <div>
//           <h1 className="text-gray-100 text-4xl">{composition.name}</h1>
//         </div>
//       </header>

//       <ReactMarkdown
//         className="max-w-screen-lg mx-auto pt-10"
//         source={composition.body}
//       />
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const compositions = await get(`*[_type == 'composition']`);
//   const paths = compositions.map((_) => _.slug);
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const [composition] = await get(
//     `*[_type == 'composition' && slug == '/compositions/${params.name}']|order(date desc) [0..10]{
//       ...,
//       "compositors": *[_type == 'composers' && name in ^.compositors[]]
//     }`
//   );

//   return {
//     props: { composition },
//   };
// }
