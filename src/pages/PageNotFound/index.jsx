import React from "react";
import styles from "./PageNotFound.module.css";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className={styles.pageNotFoundContainer}>
        <div className={styles.pageNotFound}>
          <h1>ittilaat.</h1>
          <p>Aradığın sayfa bulunamadı.</p>
          <Link className={styles.notFoundL} to={"/"}>
            <b>Geri dönmek için tıkla</b>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
