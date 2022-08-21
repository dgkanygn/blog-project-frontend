import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import styles from "./PostPage.module.css";
import NewComment from "../../components/NewComment";
import Comment from "../../components/Comment";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import DataContext from "../../Context/DataContext";

import { getByIdContent } from "../../requests/Content";
import { getByIdComment } from "../../requests/Comment";

const PostPage = () => {
  const { id } = useParams();

  const { isLogin, thisContentComments, setThisContentComments } =
    useContext(DataContext);

  const [commentData, setCommentData] = useState();
  const [contentSpesificData, setContentSpesificData] = useState();
  const [contentID, setContentID] = useState(id);

  const getContent = async () => {
    try {
      const response = await getByIdContent(contentID);

      setContentSpesificData(response?.data?.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const res = await getByIdComment(contentID);

      setThisContentComments(res?.data?.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
    getContent();
  }, []);

  return (
    <div className={styles.PostPage}>
      <Navbar />
      <Post contentSpesificData={contentSpesificData} id={id} />

      {isLogin && <NewComment id={id} />}
      <div className={styles.commentParent}>
        {thisContentComments.map((comment, index) => (
          <Comment key={index} comment={comment} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
