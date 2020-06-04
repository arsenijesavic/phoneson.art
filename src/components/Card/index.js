import { motion } from "framer-motion";

const Card = ({ id, name, category, image, theme, onClick }) => {
  return (
    <li className={`card ${theme}`} onClick={onClick}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${image}`} alt="" />
          </motion.div>

          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{name}</h2>
          </motion.div>
        </motion.div>
      </div>
      {/* <Link to={id} className={`card-open-link`} /> */}
    </li>
  );
};

export default Card;
