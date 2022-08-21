import React from "react";
import styles from "./NotificationDropDown.module.css";

import { Link } from "react-router-dom";

const NotificationDropDown = ({
  notificationDropDownCheck,
  setNotificationDropDownCheck,
}) => {
  return (
    <div className={styles.notificationDropDownContainer}>
      <div
        className={styles.notificationDropDownModal}
        onClick={() =>
          setNotificationDropDownCheck((notificationDropDownCheck = false))
        }
      ></div>
      <div className={styles.notificationDropDown}>
        <Link className={styles.navbarLink} to={"/profile"}>
          <div className={styles.notificationPiece}>
            <p>
              <b>ahmet</b> adlı kullanıcı içeriğini beğendi.
            </p>
          </div>
        </Link>{" "}
        <Link className={styles.navbarLink} to={"/profile"}>
          <div className={styles.notificationPiece}>
            <p>
              <b>ahmet</b> adlı kullanıcı içeriğini beğendi.
            </p>
          </div>
        </Link>{" "}
        <Link className={styles.navbarLink} to={"/profile"}>
          <div className={styles.notificationPiece}>
            <p>
              <b>ahmet</b> adlı kullanıcı içeriğini beğendi.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotificationDropDown;
