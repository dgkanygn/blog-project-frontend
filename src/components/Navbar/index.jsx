import React, { useContext } from "react";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import { useState } from "react";
import ProfileDropDown from "../../components/ProfileDropDown";
// import NotificationDropDown from "../NotificationDropDown";
import DataContext from "../../Context/DataContext";

const Navbar = () => {
  const {
    signPopUpCheck,
    setSignPopUpCheck,
    userInformation,
    setUserInformation,
    isLogin,
  } = useContext(DataContext);

  const [dropDownCheck, setDropDownCheck] = useState(false);

  const [notificationDropDownCheck, setNotificationDropDownCheck] =
    useState(false);

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link className={styles.navL} to={"/"}>
            <h1>ittilaat.</h1>
          </Link>

          {isLogin && (
            <div className={styles.buttons}>
              {/* <div
                className={styles.notification}
                onClick={() =>
                  setNotificationDropDownCheck(!notificationDropDownCheck)
                }
              >
                <i className="fa-regular fa-bell"></i>
                {notificationDropDownCheck && (
                  <NotificationDropDown
                    notificationDropDownCheck={notificationDropDownCheck}
                    setNotificationDropDownCheck={setNotificationDropDownCheck}
                  />
                )}
              </div> */}

              <div
                onClick={() => setDropDownCheck(!dropDownCheck)}
                className={styles.userProfileButton}
              >
                <img
                  src={`http://localhost:3001/${userInformation?.profileImage}`}
                  alt=""
                />
                <p>{userInformation?.username}</p>
                {dropDownCheck && (
                  <ProfileDropDown
                    dropDownCheck={dropDownCheck}
                    setDropDownCheck={setDropDownCheck}
                  />
                )}
              </div>
            </div>
          )}

          {!isLogin && (
            <div className={styles.isLogin}>
              <button onClick={() => setSignPopUpCheck(!signPopUpCheck)}>
                Kaydol veya giriş yap
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
