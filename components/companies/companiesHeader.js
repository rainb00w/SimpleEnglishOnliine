import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useWindowSize from '../../hooks/useWidthHook';
import s from '../../styles/companiesHeader.module.scss';

export default function CompaniesHeader() {
  const { width } = useWindowSize();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Максимум 15 символів')
        .required('Необхідне поле'),
      email: Yup.string().email('Неправильна почта').required('Необхідне поле'),
    }),

    onSubmit: (values) => {
      console.log('working', values);
      const messageBody = `Для команий | Имя : ${values.firstName} , Почта : ${values.email}, Телефон : ${values.phone}`;
      const TOKEN = '5405323048:AAHAhAv_7eTYsRrDegoUl_VusvwV8XcuDlw';
      const CHAT_ID = '-1001739141169';
      const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      axios
        .post(URL_API, {
          chat_id: CHAT_ID,
          text: messageBody,
        })
        .then(formik.setSubmitting(false))
        .then(formik.resetForm());

      // toast.success("Заявка відправлена!", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 1000,
      //   icon: false,
      // })();

      // alert(messageBody);
    },
  });

  return (
    <>
      <div className={s.bgColor}>
        <div className="container">
          <div className={s.mainBlock}>
            <div className={s.header}>
              <div className={s.headerH}>
                <span className={s.color}>Англійська</span>{' '}
                {width > 767 && (
                  <>
                    <br></br>
                  </>
                )}
                для вашої компанії
              </div>
              <div className={s.headerP}>
                Корпоративна англійська для команди - це прозора інвестиція в
                розвиток співробітників. Чому б не апгрейднути англійську і не
                вийти на <span className={s.headerPColor}> новий рівень?</span>
              </div>
            </div>

            <div className={s.girlImage}>
              {width < 768 && (
                <img
                  src="/img/forCompanies/compniesHeader_mobile.webp"
                  alt="Teacher"
                  //  width={470}
                  //  height={672}
                  placeholder="blur" // Optional blur-up while loading
                />
              )}
              {width < 1200 && width > 768 && (
                <img
                  src="/img/forCompanies/compniesHeader_tablet.webp"
                  alt="Teacher"
                  //  width={470}
                  //  height={672}
                  placeholder="blur" // Optional blur-up while loading
                />
              )}

              {width > 1200 && (
                <img
                  src="/img/forCompanies/compniesHeader_desktop.webp"
                  alt="Teacher"
                  width={690}
                  //  height={672}
                  placeholder="blur" // Optional blur-up while loading
                />
              )}
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
              <label className={s.form_header}>
                Заповніть форму, {width < 1200 && <br></br>} щоб отримати
                консультацію!
              </label>
              {width > 1200 ? (
                <label className={s.formFlex}>
                  <input
                    className={s.form_input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={
                      formik.touched.firstName && formik.errors.firstName
                        ? 'Ім’я ( необхідне поле )'
                        : 'Ім’я...'
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
                        ? 'Email ( необхідне поле )'
                        : 'Email...'
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
                </label>
              ) : (
                <>
                  <input
                    className={s.form_input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={
                      formik.touched.firstName && formik.errors.firstName
                        ? 'Ім’я ( необхідне поле )'
                        : 'Ім’я...'
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
                        ? 'Email ( необхідне поле )'
                        : 'Email...'
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
                </>
              )}

              <button type="submit" className={s.form_button}>
                відправити
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
