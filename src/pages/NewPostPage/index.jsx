import React from "react";
import CreatePost from "../../components/CreatePost";
import Navbar from "../../components/Navbar";

import styles from "./NewPostPage.module.css";

const NewPostPage = () => {
  return (
    <div className={styles.newPostPage}>
      <Navbar />
      <CreatePost />
    </div>
  );
};

export default NewPostPage;
