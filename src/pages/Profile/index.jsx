import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NewPostButton from "../../components/NewPostButton";
import ProfileContent from "../../components/ProfileContent";
import ProfileInfo from "../../components/ProfileInfo";
import DataContext from "../../Context/DataContext";
import styles from "./Profile.module.css";
import { useParams } from "react-router-dom";

import { getProfile, getUserFavsAndContents } from "../../requests/User";
import ProfileDeleteButton from "../../components/ProfileDeleteButton";

const Profile = () => {
  const { username } = useParams();

  const [contents, setContents] = useState([]);
  const [favs, setFavs] = useState([]);

  const [profileSpesificData, setProfileSpesificData] = useState();

  const [contentOrFav, setContentOrFav] = useState(false);

  const profile = async () => {
    try {
      const response = await getProfile(username);

      setProfileSpesificData(response.data.existingUser);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavsAndContents = async () => {
    try {
      const res = await getUserFavsAndContents(username);
      setContents(res?.data?.contents);
      setFavs(res?.data?.favs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profile();
    getFavsAndContents();
  }, []);

  const { isLogin } = useContext(DataContext);

  return (
    <div className={styles.profile}>
      <Navbar />
      <ProfileInfo
        profileSpesificData={profileSpesificData}
        contents={contents}
        favs={favs}
      />

      <div className={styles.profileButtons}>
        {isLogin && <ProfileDeleteButton />}

        {isLogin && <NewPostButton />}
      </div>

      <ProfileContent
        contentOrFav={contentOrFav}
        setContentOrFav={setContentOrFav}
        contents={contents}
        favs={favs}
      />
    </div>
  );
};

export default Profile;
