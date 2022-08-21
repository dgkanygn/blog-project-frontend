import React, { useContext } from "react";
import styles from "./Modal.module.css";

import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";

const ProfileDropDown = ({ dropDownCheck, setDropDownCheck }) => {
  const { userInformation } = useContext(DataContext);

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLogin");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className={styles.profileDropDownContainer}>
      <div
        className={styles.profileDropDownModal}
        onClick={() => setDropDownCheck((dropDownCheck = false))}
      ></div>
      <div className={styles.profileDropDown}>
        <Link
          className={styles.navbarLink}
          to={`/profile/${userInformation.username}`}
        >
          <div>
            <i class="fa-solid fa-user"></i> <span>Profil</span>
          </div>
        </Link>

        {/* <Link className={styles.navbarLink} to={"/settings"}>
          <div>
            <i class="fa-solid fa-gear"></i> <span>Ayarlar</span>
          </div>
        </Link> */}

        <div onClick={logOut}>
          <i class="fa-solid fa-right-from-bracket"></i> <span>Çıkış Yap</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
