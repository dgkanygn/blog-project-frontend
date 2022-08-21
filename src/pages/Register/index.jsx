import React, { useContext, useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import licensed from "../../images/licensed.jpg";

import { useNavigate } from "react-router-dom";

import { register } from "../../requests/Auth";

import { useFormik } from "formik";

import registerValidation from "./registerValidation";
import DataContext from "../../Context/DataContext";

const Register = () => {
  const { buttonWaitAnimation, setButtonWaitAnimation } =
    useContext(DataContext);

  const navigate = useNavigate();

  const [receipt, setReceipt] = useState();

  const [receiptCheck, setReceiptCheck] = useState(false);

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        bio: "",
      },

      onSubmit: async (values) => {
        const formData = new FormData();

        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("bio", values.bio);
        formData.append("receipt", receipt);


        setReceiptCheck(!receipt ? true : false);

        try {
          const res = await register(formData);

          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      },

      validationSchema: registerValidation,
    });

  console.log(receiptCheck);

  return (
    <div className={styles.login}>
      <div className={styles.loginTop}>
        <img src={licensed} alt="" />
        <h1>ittilaat.</h1>
        <p>Makaleler oku, yaz, paylaş.</p>
      </div>

      <div className={styles.loginBox}>
        <h1>Kaydol</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.username}>
            <label htmlFor="">E-posta</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {errors.email && touched.email && (
            <div className={styles.registerErrors}>{errors.email}</div>
          )}

          <div className={styles.username}>
            <label htmlFor="">Kullanıcı adı</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {errors.username && touched.username && (
            <div className={styles.registerErrors}>{errors.username}</div>
          )}

          <div className={styles.username}>
            <label htmlFor="">Bio</label>
            <input
              type="text"
              name="bio"
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className={styles.password}>
            <label htmlFor="">Şifre</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {errors.password && touched.password && (
            <div className={styles.registerErrors}>{errors.password}</div>
          )}

          <div className={styles.password}>
            <label htmlFor="">Şifreni tekrar gir</label>
            <input
              type="password"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className={styles.registerErrors}>
              {errors.passwordConfirm}
            </div>
          )}

          <label htmlFor="">Profil fotoğrafi</label>
          <input type="file" onChange={(e) => setReceipt(e.target.files[0])} />

          {receiptCheck && (
            <p
              style={{
                color: "rgb(251, 62, 62)",
              }}
            >
              Lütfen bir profil fotoğrafı yükleyin.
            </p>
          )}

          <div className={styles.loginButtonContainer}>
            <p>
              Kaydolarak, kullanım koşullarını, veri ve çerezler ilkesini kabul
              etmiş olursun.
            </p>

            <button
              type="submit"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: buttonWaitAnimation
                  ? "rgb(129, 196, 242)"
                  : "rgb(0, 114, 208)",
              }}
            >
              Kaydol
            </button>
          </div>
        </form>
        <p>
          Zaten bir hesabın var mı?{" "}
          <Link className={styles.registerL} to={"/login"}>
            <b>Giriş yap</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
