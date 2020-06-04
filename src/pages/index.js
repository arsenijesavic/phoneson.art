import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import Composition from "../components/Composition";

const items = [
  {
    id: "c",
    category: "Jennifer Walshe",
    name: "Volunteer Chorus",
    image: "01-jennifer-walshe-volunteer-chorus.jpg",
  },
  {
    id: "f",
    category: "Andreja Andrić",
    name: "One Bit Flow",
    image: "02-andreja-andric-one-bit-flow.jpg",
  },
  {
    id: "a",
    category: "Johannes Kreidler",
    name: "Steady Shot",
    image: "03-johannes-kreidler-sready-shot.jpg",
  },
  {
    id: "g",
    category: "Maja Bosnić",
    name: `\com.app.data`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "04-comappdata.jpg",
  },
  {
    id: "d",
    category: "Maja Bosnic",
    name: "The Upgrade",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "05-the-upgrade-maja-bosnic.jpg",
  },
  {
    id: "h",
    category: "David Helbich",
    name: "No Music",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "06-no-music-david-helbich.jpg",
  },
  {
    id: "e",
    category: "4/phones collective",
    name: "menuet4phones",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "07-menuet4phones-4phones-collective.jpg",
  },
];

export default () => {
  const [selectedId, setSelectedId] = React.useState(false);
  const selectedComposition = items.find((_) => _.id === selectedId);

  return (
    <AnimateSharedLayout type="crossfade">
      <List selectedId={selectedId} onSelect={setSelectedId} />
      <AnimatePresence>
        {selectedId && (
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

// export async function getStaticProps() {
//   const compositions = await get(
//     `*[_type == 'compositions']|order(date desc) [0..10]{
//       ...,
//       "compositors":  *[fileAbsolutePath match 'community' && name in ^.guests[]]
//     }`
//   );

//   return {
//     props: {},
//   };
// }

const List = ({ selectedId, onSelect }) => {
  return (
    <ul className="card-list">
      {items.map((card) => (
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
