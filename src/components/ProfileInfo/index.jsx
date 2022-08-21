import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileSpesificData, contents, favs }) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfoLeft}>
        <img
          className={styles.profileImage}
          src={`http://localhost:3001/${profileSpesificData?.profileImage}`}
          alt=""
        />
      </div>
      <div className={styles.profileInfoRight}>
        <p className={styles.profileInfoRightUsername}>
          {profileSpesificData?.username}
        </p>
        <div className={styles.artandfav}>
          <p>{contents.length} İçerik</p>
          <p>{favs.length} Favori</p>
        </div>
        <p>{profileSpesificData?.bio}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
