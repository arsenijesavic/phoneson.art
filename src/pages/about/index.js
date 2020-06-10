import React from "react";
import { get } from "lib/api";

export default ({ compositions }) => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

// export async function getStaticProps() {
//   const compositions = await get(
//     `*[_type == 'composition']|order(date desc) [0..10]{
//       ...,
//       "compositors": *[_type == 'composers' && name in ^.compositors[]]
//     }`
//   );

//   return {
//     props: {
//       compositions: compositions.map((_, index) => ({
//         id: String(index),
//         ..._,
//       })),
//     },
//   };
// }
