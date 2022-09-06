import s from "../styles/header.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className={s.mainBlock}>
        <div className="container">
          <div className={s.leftBlock}>
            <div className={s.leftBlocktextH1}>
              <h1 className={s.textH1}>
                <span className={s.color} lang="en">Simple English</span> - <br />
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
                  placeholder="Ім’я..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={s.formRequiredText}>{formik.errors.firstName}</div>
                ) : null}

                <input
                  className={s.form_input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={s.formRequiredText}>{formik.errors.email}</div>
                ) : null}

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
