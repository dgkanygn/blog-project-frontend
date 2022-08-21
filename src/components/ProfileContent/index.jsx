import React, { useEffect, useState } from "react";
import styles from "./ProfileContent.module.css";

import { getByUserIdContent } from "../../requests/Content";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const ProfileContent = ({ contentOrFav, setContentOrFav, contents, favs }) => {
  const username = useParams();

  const [profileContentData, setProfileContentData] = useState();

  const getProfileContent = async () => {
    try {
      const res = await getByUserIdContent(username);
      setProfileContentData(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileContent();
  }, []);

  return (
    <div className={styles.profileContent}>
      <div className={styles.profileContentTop}>
        <p
          onClick={() => setContentOrFav(false)}
          style={
            contentOrFav ? { fontWeight: "500" } : { fontWeight: "bolder" }
          }
        >
          İçerikler
        </p>
        <p
          onClick={() => setContentOrFav(true)}
          style={
            !contentOrFav ? { fontWeight: "500" } : { fontWeight: "bolder" }
          }
        >
          Favoriler
        </p>
      </div>

      <div className={styles.profileContentBottom}>
        {!contentOrFav &&
          contents.map((content, index) => {
            return (
              <div className={styles.profileContentCard} key={index}>
                {content ? (
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/content/${content._id}`}
                  >
                    <p>{content.title}</p>
                  </Link>
                ) : (
                  <p>Henüz bir içeriğin yok.</p>
                )}
              </div>
            );
          })}

        {contentOrFav &&
          favs.map((fav, index) => {
            return (
              <div className={styles.profileContentCard} key={index}>
                {fav ? (
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/content/${fav._id}`}
                  >
                    <p>{fav.title}</p>
                  </Link>
                ) : (
                  <p>Henüz bir içeriğin yok.</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileContent;
