import React, { useContext, useState } from "react";
import styles from "./SettingsBox.module.css";

import { deleteProfile } from "../../requests/User.js";
import DataContext from "../../Context/DataContext";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const SettingsBox = () => {
  const { userInformation } = useContext(DataContext);

  const [password, setPassword] = useState();

  const [passwordCheck, setPasswordCheck] = useState(false);

  const [passwordMsg, setPasswordMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(password);

    try {
      if (password) {
        const res = await deleteProfile(userInformation.username, {
          password: password,
        });

        navigate("/");

        localStorage.removeItem("userToken");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("isLogin");

        window.location.reload();

        console.log(res?.data);
      } else {
        setPasswordCheck(true);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setPasswordMsg(error.response.data.message);
    }
  };

  if (password && passwordCheck) setPasswordCheck(false);

  return (
    <div className={styles.settingsBox}>
      <h1>Hesabımı Sil</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.usernameSetting}>
          <label htmlFor="">Hesabını silmek için şifreni gir</label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {passwordCheck && (
          <p style={{ color: "red", margin: "0" }}>Lütfen şifreni girin.</p>
        )}

        {!passwordCheck && passwordMsg && (
          <p style={{ color: "red", margin: "0" }}>{passwordMsg}</p>
        )}

        <div className={styles.settingsBoxButtons}>
          <div className={styles.confirmButton}>
            <button
              type="submit"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "rgb(208, 0, 0)",
              }}
            >
              Onayla
            </button>
          </div>
          <div className={styles.confirmButton}>
            <Link to={"/"}>
              <button
                type="submit"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Vazgeç
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsBox;
