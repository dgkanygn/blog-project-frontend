import React, { useContext } from "react";
import styles from "./CreatePost.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataContext";

import { addContent } from "../../requests/Content";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { updateContent } from "../../requests/Content";

const CreatePost = () => {
  const navigate = useNavigate();

  const {
    userInformation,
    contentEditInfo,
    setContentEditInfo,
    editCheck,
    setEditCheck,
    buttonWaitAnimation,
    setButtonWaitAnimation,
  } = useContext(DataContext);

  const [contentTitle, setContentTitle] = useState();
  const [contentDescription, setContentDescription] = useState();
  const [firstContent, setFirstContent] = useState();
  const [content, setContent] = useState();

  const newHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editCheck) {
        const res = await updateContent(contentEditInfo.contentID, {
          title: contentEditInfo.title,
          description: contentEditInfo.description,
          newContent: contentEditInfo.newContent,
        });
        setButtonWaitAnimation(true);

        setTimeout(() => {
          setEditCheck(false);
          navigate("/");
          setButtonWaitAnimation(false);
        }, 2000);
      } else if (!editCheck) {
        const res = await addContent({
          title: contentTitle,
          description: contentDescription,
          newContent: content,
          userName: userInformation.username,
          userImage: userInformation.profileImage,
        });
        setButtonWaitAnimation(true);

        setTimeout(() => {
          navigate("/");
          setButtonWaitAnimation(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.createPost}>
      <h1>{editCheck ? "Gönderiyi Düzenle" : "Yeni Gönderi Oluştur"}</h1>
      <form onSubmit={newHandleSubmit}>
        <div className={styles.createPostTitle}>
          <label htmlFor="">Başlık</label>
          <input
            type="text"
            value={editCheck ? contentEditInfo.title : contentTitle}
            onChange={(e) =>
              editCheck
                ? setContentEditInfo({
                    ...contentEditInfo,
                    title: e.target.value,
                  })
                : setContentTitle(e.target.value)
            }
          />
        </div>
        <div className={styles.createPostTitle}>
          <label htmlFor="">Açıklama</label>
          <input
            type="text"
            value={editCheck ? contentEditInfo.description : contentDescription}
            onChange={(e) =>
              editCheck
                ? setContentEditInfo({
                    ...contentEditInfo,
                    description: e.target.value,
                  })
                : setContentDescription(e.target.value)
            }
          />
        </div>
        <div className={styles.createPostArticle}>
          <label htmlFor="">İçerik</label>

          <CKEditor
            editor={ClassicEditor}
            config={{
              removePlugins: ["MediaEmbed", "Table"],
            }}
            data={editCheck && contentEditInfo.newContent}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();

              editCheck
                ? setContentEditInfo({
                    ...contentEditInfo,
                    newContent: data,
                  })
                : setContent(data);
            }}
          />
        </div>
        <div className={styles.createNewButton}>
          <button
            style={{
              fontFamily: "Poppins, sans-serif",
              backgroundColor: buttonWaitAnimation
                ? "rgb(129, 196, 242)"
                : "rgb(0, 114, 208)",
            }}
            disabled={buttonWaitAnimation ? true : false}
          >
            Yayımla
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
