import { motion } from "framer-motion";

// import ImageTool from "@sanity/imagetool";
import calculateStyles from "@sanity/imagetool/calculateStyles";

const Card = ({ id, name, compositors, photo, onClick }) => {
  const styles = calculateStyles({
    hotspot: {
      x: 0.4,
      y: 0.3,
      height: 0.6,
      width: 0.4,
    },
    // crop: {
    //   left: 0.1,
    //   right: 0.2,
    //   top: 0.1,
    //   bottom: 0.21,
    // },
    // image: { height: 100, width: 125 },
    // container: { aspectRatio: 16 / 10 },
    align: {
      x: "left",
      y: "center",
    },
  });

  console.log(styles);

  return (
    <li className="card cursor-pointer" onClick={onClick}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <ul>
                {compositors.map((composer, index) => (
                  <li
                    key={index}
                    className="font-regular text-base text-gray-400 uppercase"
                  >
                    {composer.name}
                  </li>
                ))}
              </ul>
              <h2 className="font-extrabold text-4xl leading-none mt-2 text-gray-100">
                {name}
              </h2>
            </motion.div>
            <img className="card-image" src={photo} />
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
};

export default Card;
