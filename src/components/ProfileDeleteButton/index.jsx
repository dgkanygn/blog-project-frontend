import React from "react";
import styles from "./profileDeleteButton.module.css";

import { Link } from "react-router-dom";

const ProfileDeleteButton = () => {
  return (
    <div className={styles.newPostButton}>
      <Link to={"/deleteProfile"}>
        <button>Hesabımı Sil</button>
      </Link>
    </div>
  );
};

export default ProfileDeleteButton;
