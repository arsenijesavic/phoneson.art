import React from "react";
import { get } from "lib/api";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Card from "components/Card";
import Composition from "components/Composition";

export default ({ compositions }) => {
  const [selectedId, setSelectedId] = React.useState(-1);
  const selectedComposition = compositions.find((_) => _.id === selectedId);

  return (
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
    <ul className="card-list">
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
