import React, { useContext } from "react";
import styles from "./Comment.module.css";
import CommentDetailsButton from "../CommentDetailsButton";
import { useState } from "react";
import DataContext from "../../Context/DataContext";
import { likeComment } from "../../requests/Comment";
import { Link } from "react-router-dom";

const Comment = ({ comment, index }) => {
  const { isLogin, signPopUpCheck, setSignPopUpCheck, userInformation } =
    useContext(DataContext);

  const [commentDetailsButtonCheck, setCommentDetailsButton] = useState(false);

  const [commentLikeCount, setCommentLikeCount] = useState(
    comment?.likes?.length
  );

  const like = async () => {
    try {
      const res = await likeComment(comment._id, {
        userID: userInformation._id,
      });

      setCommentLikeCount(res?.data?.updated?.likes?.length);
    } catch (err) {
      console.log(err.response.message);
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfoAndDetailsButton}>
        <Link className={styles.commentNavL} to={`/profile/${comment?.owner}`}>
          <div className={styles.userInfo}>
            <img src={`http://localhost:3001/${comment?.ownerImage}`} alt="" />
            <p>{comment?.owner}</p>
          </div>
        </Link>

        <div>
          <div
            onClick={() => {
              isLogin
                ? setCommentDetailsButton(!commentDetailsButtonCheck)
                : setSignPopUpCheck(isLogin ? signPopUpCheck : !signPopUpCheck);
            }}
            className={styles.detailsButton}
          >
            <i className="fa-solid fa-ellipsis"></i>
            {commentDetailsButtonCheck && (
              <CommentDetailsButton
                commentDetailsButtonCheck={commentDetailsButtonCheck}
                setCommentDetailsButton={setCommentDetailsButton}
                commentID={comment._id}
                comment={comment}
                index={index}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.userComment}>
        <p>{comment?.newComment}</p>
      </div>

      <div className={styles.userReact}>
        <div
          className={styles.likeButton}
          onClick={() => {
            !isLogin
              ? setSignPopUpCheck(isLogin ? signPopUpCheck : !signPopUpCheck)
              : like();
          }}
        >
          <i className="fa-regular fa-thumbs-up"></i>
          <p>{commentLikeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
