import React from "react";
import { get } from "lib/api";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Layout from "components/Layout";
import Card from "components/Card";
import Composition from "components/Composition";

const List = ({ data, onSelect }) => {
  return (
    <ul className="card-list">
      {data.map((card, index) => (
        <li className="card cursor-pointer" onClick={() => onSelect(card.id)}>
          <Card key={index} {...card} />
        </li>
      ))}
    </ul>
  );
};

export default ({ compositions }) => {
  const [selectedId, setSelectedId] = React.useState(-1);
  const selectedComposition = compositions.find((_) => _.id === selectedId);

  return (
    <Layout splash={true}>
      <div className="max-w-screen-xl mx-auto px-8 sm:px-16 text-gray-100 pb-48">
        <AnimateSharedLayout type="crossfade">
          <List data={compositions} onSelect={setSelectedId} />

          <AnimatePresence>
            {selectedComposition && (
              <Composition
                key={selectedId}
                id={selectedId}
                {...selectedComposition}
                onClose={() => setSelectedId(-1)}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const compositions = await get(
    `*[_type == 'composition']|order(date desc) [0..10]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );

  return {
    props: {
      compositions: compositions.map((_, index) => ({
        id: String(index),
        ..._,
      })),
    },
  };
}
