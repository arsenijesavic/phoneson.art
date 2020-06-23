import React from "react";
import { get } from "lib/api";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Layout from "components/Layout";
import Card from "components/Card";
import Composition from "components/Composition";

export default ({ compositions }) => {
  const [selectedId, setSelectedId] = React.useState(-1);
  const selectedComposition = compositions.find((_) => _.id === selectedId);

  return (
    <Layout splash={true}>
      <AnimateSharedLayout type="crossfade">
        <List
          data={compositions}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <AnimatePresence>
          {selectedComposition && (
            <Composition
              key="item"
              id={selectedId}
              {...selectedComposition}
              onClose={() => setSelectedId(false)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
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

const List = ({ data, selectedId, onSelect }) => {
  return (
    <ul className="card-list mb-48 p-8">
      {data.map((card) => (
        <Card
          key={card.id}
          {...card}
          isSelected={card.id === selectedId}
          onClick={() => onSelect(card.id)}
        />
      ))}
    </ul>
  );
};
