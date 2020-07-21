import React from "react";
import { motion } from "framer-motion";

const Card = ({ id, name, compositors, photo }) => {
  return (
    <div className="card-content-container cursor-pointer">
      <motion.div className="card-content" layoutId={`card-container-${id}`}>
        <motion.div
          className="card-image-container relative"
          layoutId={`card-image-container-${id}`}
        >
          <motion.div
            className="title-container group hover:bg-black hover:bg-opacity-75"
            layoutId={`title-container-${id}`}
          >
            <ul>
              {compositors.map((composer, index) => (
                <li key={index}>
                  <p className="font-regular text-base text-gray-400 uppercase group-hover:text-indigo-700">
                    {composer.name}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mt-2 text-gray-100 group-hover:text-indigo-400">
              {name}
            </h2>
          </motion.div>

          <img className="card-image" src={photo} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
