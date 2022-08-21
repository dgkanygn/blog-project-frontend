import React, { useContext } from "react";
import styles from "./CommentDetailsButton.module.css";

import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";

import { deleteComment } from "../../requests/Comment";

const CommentDetailsButton = ({
  commentDetailsButton,
  setCommentDetailsButton,
  commentID,
  comment,
  index,
}) => {
  const { userInformation, thisContentComments, setThisContentComments } =
    useContext(DataContext);

  let newArray;

  const deleteCommentButton = async () => {
    try {
      const res = await deleteComment(commentID);
      console.log(res.data);
      newArray = [...thisContentComments];
      newArray.splice(index, 1);
      setThisContentComments(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.commentDetailsButtonContainer}>
      <div
        className={styles.commentDetailsButtonModal}
        onClick={() => setCommentDetailsButton((commentDetailsButton = false))}
      ></div>
      <div className={styles.commentDetailsButton}>
        <Link className={styles.navbarLink} to={"/profile"}>
          <div>
            <span>Bildir</span>
          </div>
        </Link>

        {/* <Link className={styles.navbarLink} to={"/settings"}>
          <div>
            <span>Düzenle</span>
          </div>
        </Link> */}

        {comment?.owner === userInformation?.username && (
          <div onClick={deleteCommentButton}>
            <span>Sil</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentDetailsButton;
