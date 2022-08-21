import React, { useContext, useEffect } from "react";
import styles from "./Post.module.css";

import PostDetailsButton from "../PostDetailsButton";
import { useState } from "react";
import DataContext from "../../Context/DataContext";
import { Link } from "react-router-dom";

import { likeContent } from "../../requests/Content";
import { useParams } from "react-router-dom";
import { getByIdContent } from "../../requests/Content";

const Post = ({ contentSpesificData }) => {
  const { isLogin, signPopUpCheck, setSignPopUpCheck, userInformation } =
    useContext(DataContext);

  const [postDetailsButton, setPostDetailsButton] = useState(false);

  const [likeSayac, setLikeSayac] = useState();

  const { id } = useParams();

  const getApi = async () => {
    try {
      const res = await getByIdContent(id);
      setLikeSayac(res?.data?.content?.likes?.length);
    } catch (error) {
      console.log(error);
    }
  };

  const like = async () => {
    try {
      const res = await likeContent(contentSpesificData._id, {
        userID: userInformation.username,
      });
      setLikeSayac(res?.data?.updated?.likes?.length);
    } catch (err) {
      console.log(err?.response?.message);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={styles.post}>
      <div className={styles.postCardBottom}>
        <Link
          className={styles.postNavL}
          to={`/profile/${contentSpesificData?.userName}`}
        >
          <div className={styles.userInfo}>
            <img
              src={`http://localhost:3001/${contentSpesificData?.userImage}`}
              alt=""
            />

            <p>{contentSpesificData?.userName}</p>
          </div>
        </Link>

        <div className={styles.userReact}>
          <div
            className={styles.likeButton}
            onClick={() => {
              !isLogin
                ? setSignPopUpCheck(isLogin ? signPopUpCheck : !signPopUpCheck)
                : like();
            }}
          >
            <i class="fa-regular fa-star"></i>
            <p>{likeSayac}</p>
          </div>

          <div
            onClick={() => {
              isLogin
                ? setPostDetailsButton(!postDetailsButton)
                : setSignPopUpCheck(isLogin ? signPopUpCheck : !signPopUpCheck);
            }}
            className={styles.detailsButton}
          >
            <i class="fa-solid fa-ellipsis"></i>
            {postDetailsButton && (
              <PostDetailsButton
                id={id}
                postDetailsButton={postDetailsButton}
                setPostDetailsButton={setPostDetailsButton}
                contentSpesificData={contentSpesificData}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.postContent}>
        <h1>{contentSpesificData?.title}</h1>
        <h3>{contentSpesificData?.description}</h3>

        <p
          className={styles.paragraph}
          dangerouslySetInnerHTML={{
            __html: contentSpesificData?.newContent,
          }}
        ></p>
      </div>
    </div>
  );
};

export default Post;
