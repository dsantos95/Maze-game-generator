import styles from "./MazeDetail.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";
import { initial, whileInView, transition } from "../FramerMotionOptions";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MazeDetail = ({ maze }) => {
  const [styleImg, setStyleImg] = useState("img_loading");
  const [skeleton, setSkeleton] = useState(true);

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      <div className={styles.maze}>
        {skeleton && <Skeleton />}
        <img
          className={styleImg}
          src={maze.url_image}
          alt={maze.image}
          onLoad={() => {
            setSkeleton(false);
            setStyleImg("img_loaded");
          }}
        />
        <h3>{maze.name}</h3>
        <p id="date">
          Criado em:
          <br />
          {maze.created_at}
        </p>
        <Link to={`/mazes/${maze.id}`} className="btn">
          Detalhes
        </Link>
      </div>
    </motion.div>
  );
};

export default MazeDetail;
