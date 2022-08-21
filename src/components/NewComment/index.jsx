import React, { useContext } from "react";
import styles from "./NewComment.module.css";
import { useState } from "react";

import DataContext from "../../Context/DataContext";

import { addComment } from "../../requests/Comment";

const NewComment = ({ id }) => {
  const [comment, setComment] = useState();

  const { userInformation, thisContentComments, setThisContentComments } =
    useContext(DataContext);

  const newHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addComment({
        newComment: comment,
        owner: userInformation.username,
        ownerImage: userInformation.profileImage,
        contentID: id,
      });
      setComment("");
      setThisContentComments([...thisContentComments, res?.data?.comment]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.newComment}>
      <form onSubmit={newHandleSubmit}>
        <div className={styles.commentTop}>
          <img
            src={`http://localhost:3001/${userInformation?.profileImage}`}
            alt=""
          />
          <textarea
            name=""
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.commentBottom}>
          <button style={{ fontFamily: "Poppins, sans-serif" }}>
            Yorum Yaz
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComment;
