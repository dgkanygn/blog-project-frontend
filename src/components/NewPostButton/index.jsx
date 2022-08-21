import React from "react";
import styles from "./NewPostButton.module.css";

import { Link } from "react-router-dom";

const NewPostButton = () => {
  return (
    <div className={styles.newPostButton}>
      <Link to={"/newPostPage"}>
        <button style={{ fontFamily: "Poppins, sans-serif" }}>
          <i className="fa-solid fa-pen"></i>
          <span> Yeni İçerik</span>
        </button>
      </Link>
    </div>
  );
};

export default NewPostButton;
