import React, { useContext } from "react";
import styles from "./PostDetailsButton.module.css";

import { useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataContext";

import { deleteContent } from "../../requests/Content";

const PostDetailsButton = ({
  contentSpesificData,
  postDetailsButton,
  setPostDetailsButton,
  id,
}) => {
  const navigate = useNavigate();

  const {
    userInformation,
    contentEditInfo,
    setContentEditInfo,
    editCheck,
    setEditCheck,
  } = useContext(DataContext);

  const deleteButton = async () => {
    const response = await deleteContent(id);
    console.log(response.data);
    navigate("/");
  };

  const editButton = async () => {
    setContentEditInfo({
      title: contentSpesificData.title,
      description: contentSpesificData.description,
      newContent: contentSpesificData.newContent,
      contentID: id,
    });
    setEditCheck(true);
    navigate("/newPostPage");
  };

  return (
    <div className={styles.postDetailsButtonContainer}>
      <div
        className={styles.postDetailsButtonModal}
        onClick={() => setPostDetailsButton((postDetailsButton = false))}
      ></div>
      <div className={styles.postDetailsButton}>
        <div>
          <span>Bildir</span>
        </div>

        {contentSpesificData.userName === userInformation.username && (
          <div onClick={editButton}>
            <span>Düzenle</span>
          </div>
        )}

        {contentSpesificData.userName === userInformation.username && (
          <div onClick={deleteButton}>
            <span>Sil</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailsButton;
