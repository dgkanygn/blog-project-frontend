import React, { useContext } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/PostCard";
import NewPostButton from "../../components/NewPostButton";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "../../Context/DataContext";

import { getContent } from "../../requests/Content";

const Home = () => {
  const [contentData, setContentData] = useState();

  const {
    isLogin,
    contentEvent,
    setContentEvent,
    currentContent,
    setCurrentContent,
  } = useContext(DataContext);

  const getApi = async () => {
    try {
      const response = await getContent();
      setContentData(response?.data?.contents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={styles.home}>
      <Navbar isLogin={isLogin} />

      <div className={styles.postButton}>{isLogin && <NewPostButton />}</div>

      <div className={styles.contentParent}>
        {contentData?.map((content, index) => (
          <PostCard
            key={index}
            content={content}
            contentEvent={contentEvent}
            setContentEvent={setContentEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
