import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";
import styles from "./SignPopUp.module.css";

import { Link } from "react-router-dom";

const SignPopUp = () => {
  const sign = useContext(DataContext);

  return (
    <>
      <div className={styles.signPopUp}>
        <div className={styles.signPopUpModal}>
          <div className={styles.signPopUpBox}>
            <h3>
              Bir hesabın varsa içerikleri beğenebilir, favorileyebilir, yorum
              yazabilir veya kendin bir içerik oluşturabilirsin.
            </h3>
            <Link
              to="login"
              onClick={() => sign.setSignPopUpCheck(!sign.signPopUpCheck)}
            >
              <button>Şimdi kaydol veya giriş yap</button>
            </Link>
            <p onClick={() => sign.setSignPopUpCheck(!sign.signPopUpCheck)}>
              İstemiyorum
            </p>
          </div>
        </div>
        <div className={styles.signPopUpBoxContainer}></div>
      </div>
    </>
  );
};

export default SignPopUp;
