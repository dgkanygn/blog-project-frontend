import React, { useContext, useState } from "react";
import styles from "./PostCard.module.css";
import defaultPP from "../../images/default.png";

import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";
import { likeContent } from "../../requests/Content";

const PostCard = ({ content }) => {
  const [countLike, setCountLike] = useState(content?.likes?.length);

  const {
    isLogin,
    signPopUpCheck,
    setSignPopUpCheck,
    setContentEvent,
    userInformation,
  } = useContext(DataContext);

  const like = async () => {
    try {
      const res = await likeContent(content._id, {
        userID: userInformation.username,
      });
      setCountLike(res?.data?.updated?.likes?.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={styles.postCard}
      onClick={() => {
        setContentEvent(content);
      }}
    >
      <Link className={styles.navL} to={`/content/${content._id}`}>
        <h3>{content?.title}</h3>
      </Link>

      <p>{content?.description}</p>
      <div className={styles.postCardBottom}>
        <Link className={styles.navL} to={`/profile/${content?.userName}`}>
          <div className={styles.userInfo}>
            <img src={`http://localhost:3001/${content?.userImage}`} alt="" />
            <p>{content?.userName}</p>
          </div>
        </Link>

        <div className={styles.userReact}>
          {/*  */}
          <div
            className={styles.likeButton}
            onClick={() => {
              !isLogin
                ? setSignPopUpCheck(isLogin ? signPopUpCheck : !signPopUpCheck)
                : like();
            }}
          >
            <i class="fa-regular fa-star"></i>

            <p>{countLike}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
