import { useFormik } from "formik";
import * as Yup from "yup";
import s from "../styles/signUpBlock.module.scss";

export default function SignUpBlock() {
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
      <div className={s.SignUpBlockDiv} id="SignUpBlockDiv"> 

          <h2 className={s.SignUpH}>Записатись </h2>
          <span className={s.SignUpH2}>на безкоштовне пробне заняття </span>

          <form onSubmit={formik.handleSubmit} className={s.form}>
            <label className={s.form_header}>
            Заповни форму <br></br>та чекай дзвінка від менеджера!
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
    </>
  );
}
