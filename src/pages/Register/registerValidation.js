import * as yup from "yup";

const registerValidation = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("Bu alan zorunludur"),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalıdır")
    .required("Bu alan zorunludur"),
  username: yup.string().required("Bu alan zorunludur"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler uyuşmuyor")
    .required("Bu alan zorunludur"),
});

export default registerValidation;
