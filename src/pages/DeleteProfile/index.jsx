import React from "react";
import Navbar from "../../components/Navbar";
import SettingsBox from "../../components/SettingsBox";
import styles from "./DeleteProfile.module.css";

const deleteProfile = () => {
  return (
    <div className={styles.deleteProfile}>
      <Navbar />
      <SettingsBox />
    </div>
  );
};

export default deleteProfile;
