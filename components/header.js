import s from "../styles/header.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Header() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Максимум 15 символів")
        .required("Необхідне поле"),
      email: Yup.string().email("Неправильна почта").required("Необхідне поле"),
    }),

  
    onSubmit: (values) => {
      const messageBody = ` Имя : ${values.firstName} , Почта : ${values.email}, Телефон : ${values.phone}`;
      const TOKEN = "5405323048:AAHAhAv_7eTYsRrDegoUl_VusvwV8XcuDlw";
      const CHAT_ID = "-1001739141169";
      const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      axios
        .post(URL_API, {
          chat_id: CHAT_ID,
          text: messageBody,
        })
        .then(formik.setSubmitting(false))
        .then(formik.resetForm())
        .then(
          toast.success("Заявка відправлена!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            icon: false
          })
        );

      // alert(messageBody);
    },
  });

  return (
    <>
      <div className={s.mainBlock}>
        <div className="container">
          <div className={s.leftBlock}>
            <div className={s.leftBlocktextH1}>
              <h1 className={s.textH1}>
                <span className={s.color} lang="en">
                  Simple English
                </span>{" "}
                - <br />
                заговорити англійською просто!
              </h1>
            </div>

            <div className={s.form_div}>
              <form onSubmit={formik.handleSubmit} className={s.form}>
                <label className={s.form_header}>
                  Запис на безкоштовне пробне заняття!
                </label>
                <input
                  className={s.form_input}
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder={
                    formik.touched.firstName && formik.errors.firstName
                      ? "Ім’я ( необхідне поле )"
                      : "Ім’я..."
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />

                <input
                  className={s.form_input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder={
                    formik.touched.email && formik.errors.email
                      ? "Email ( необхідне поле )"
                      : "Email..."
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                <input
                  className={s.form_input}
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Телефон..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />

                <button type="submit" className={s.form_button}>
                  записатися
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
