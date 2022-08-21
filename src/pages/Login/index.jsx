import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";

import licensed from "../../images/licensed.jpg";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataContext";

import { login } from "../../requests/Auth";

import { useFormik } from "formik";

const Login = () => {
  const {
    warning,
    setWarning,
    userInformation,
    setUserInformation,
    userToken,
    setUserToken,
    isLogin,
    setIsLogin,
    buttonWaitAnimation,
    setButtonWaitAnimation,
  } = useContext(DataContext);

  const [signWarnBox, setSignWarnBox] = useState(false);

  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const res = await login(values);
        setIsLogin(true);
        setUserInformation(res.data.existingUser);
        setUserToken(res.data.token);

        setButtonWaitAnimation(true);
        setTimeout(() => {
          navigate("/");
          setWarning();
          setButtonWaitAnimation(false);
        }, 2000);
      } catch (err) {
        setWarning(err.response.data.message);
      }
    },
  });

  useEffect(() => {
    if (isLogin) {
      localStorage.setItem("isLogin", isLogin);
      localStorage.setItem("userInfo", JSON.stringify(userInformation));
      localStorage.setItem("userToken", userToken);
    }
  }, [isLogin, userInformation, userToken]);

  return (
    <div className={styles.login}>
      <div className={styles.loginTop}>
        <img src={licensed} alt="" />
        <h1>ittilaat.</h1>
        <p>Makaleler oku, yaz, paylaş.</p>
      </div>

      <div className={styles.loginBox}>
        <h1>Giriş Yap</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.username}>
            <label htmlFor="">E-posta</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="">Şifre</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          {warning && (
            <div className={styles.signWarningRedBox}>
              <p>{warning}</p>
            </div>
          )}
          <div className={styles.loginButtonContainer}>
            <button
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: buttonWaitAnimation
                  ? "rgb(129, 196, 242)"
                  : "rgb(0, 114, 208)",
              }}
              disabled={buttonWaitAnimation ? true : false}
            >
              Giriş Yap
            </button>
          </div>
        </form>

        <p>
          Hesabın yok mu?{" "}
          <Link
            onClick={() => setWarning()}
            className={styles.registerL}
            to={"/register"}
          >
            <b>Kaydol</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
