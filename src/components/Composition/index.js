import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Composiiton = ({
  id,
  slug,
  name,
  compositors,
  photo,
  description,
  onClose,
}) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        id="overlay"
        onClick={(e) => onClose(false)}
      ></motion.div> */}
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            onClick={(e) => onClose(false)}
            className="card-image-container relative"
            layoutId={`card-image-container-${id}`}
          >
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <ul>
                {compositors.map((composer, index) => (
                  <li key={index}>
                    <p className="font-regular text-xl text-red-700 uppercase">
                      {composer.name}
                    </p>
                  </li>
                ))}
              </ul>
              <h2 className="font-extrabold text-5xl leading-none mt-2 text-gray-100">
                {name}
              </h2>
            </motion.div>
            <img className="card-image" src={photo} alt="" />
          </motion.div>

          <motion.div className="text-gray-100 w-full" animate>
            <div className="w-full px-4">
              <a
                href={slug}
                className="block text-center mt-6 w-full mx-auto bg-green-500 hover:bg-green-400 text-white font-bold p-4 border-b-4 border-green-700 hover:border-green-500 rounded"
              >
                Perform
              </a>
            </div>
            {/* <button className="btn">Perform</button> */}

            <div className="flex flex-col sm:flex-row space-between p-4 sm:p-10">
              <div className="flex-1 order-last sm:order-first">
                <h3 className="text-xs uppercase">Composers:</h3>
                <ul className="flex flex-row mt-6">
                  {compositors.map((composer, index) => (
                    <li key={index}>
                      <a href={composer.slug}>
                        <div className="flex cursor-pointer">
                          <img
                            className="h-16 w-16 rounded-full mr-6"
                            src={composer.photo}
                            alt=""
                          />
                          <div>
                            <p className="font-regular text-2xl text-gray-100 hover:text-indigo-500">
                              {composer.name}
                            </p>
                            <p className="font-regular text-base text-gray-500">
                              {composer.country}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <p className="text-base sm:text-xl">{description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Composiiton;
