import { motion } from "framer-motion";

const Card = ({ id, name, compositors, photo, onClick }) => {
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
              <h2 className="font-extrabold text-3xl leading-none mt-2 text-gray-100">
                {name}
              </h2>
            </motion.div>

            <img className="card-image" src={photo} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
};

export default Card;
