import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import s from '../styles/certificate.module.scss';
import Accordion from '../helpers/accordion';
import { accordionDataCertificate } from '../data/accordion-data-cerificate';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Certificate() {
  const slides = [
    {
      id: 1,
      text: '8',
    },
    {
      id: 2,
      text: '12',
    },
    {
      id: 3,
      text: '20',
    },
    {
      id: 4,
      text: '50',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(1);

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
      const messageBody = `Сертификат | Имя на кого сертификат : ${values.firstName} , Почта покупателя: ${values.email}, Телефон телефон покупателя: ${values.phone}`;
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
    },
  });
  const handleClick = (id) => {
    setActiveSlide(id);
  };

  const renderedOptions = slides.map(({ id, text }) => {
    return (
      <div
        onClick={() => handleClick(id)}
        key={id}
        className={`${s.form_option}
                        ${activeSlide === id ? `${s.form_option_active}` : ''}
                      `}
      >
        <p>{text}</p>
      </div>
    );
  });

  const renderedOptionsTop = slides.map(({ id, text }) => {
    return (
      <div
        onClick={() => handleClick(id)}
        key={id}
        className={`${s.certificate_main_option}
                        ${
                          activeSlide === id
                            ? `${s.certificate_main_option_active}`
                            : ''
                        }
                      `}
      >
        <p className={s.certificate_main_topText}>{text}</p>
      </div>
    );
  });

  return (
    <>
      <Navigation />
      <div className={`${s.certificate}`}>
        <div className={s.chose_certificate} id="certificates">
          <h1 className={s.chose_certificate_h1}>Подаруй англійську!</h1>
          <p className={s.chose_certificate_p1}>
            Обери СЕРТИФІКАТ та подаруй заняття з викладачем для близької людини
            або другу!
          </p>
          <div className={s.certificate_main}>
            <img
              src="img/certificate/certificate_main.png"
              className={s.certificate_main_image}
            ></img>
            <div className={s.certificate_main_text}>
              на &nbsp;
              <div className={s.certificate_main_text_number}>
                {slides[activeSlide - 1].text}
              </div>
              &nbsp; занять
            </div>
          </div>
          {/* <p>💰 Вартість: 7500 грн</p> */}
        </div>
        <div className={s.form_container}>
          <form onSubmit={formik.handleSubmit} className={s.form}>
            <label className={s.form_header}>Вибрати сертифікат</label>
            <p className={s.form_text_1}>Кількість занять:</p>
            <div>
              <ul className={s.form_options}>{renderedOptions}</ul>
            </div>
            <label className={s.form_text_2}>Твій Email:</label>
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
            <label className={s.form_text_2}>Твій телефон:</label>
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
            <label className={s.form_text_3}>
              Ім’я та прізвище отримувача сертифіката:
            </label>
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

            <button type="submit" className={s.form_button}>
              вибрати
            </button>
          </form>
        </div>
        <div className={`${s.how_it_works} container`}>
          <span className={s.faq_header}>Як це працює?</span>
          <div className={s.blocks}>
            <div className={`${s.block} ${s.grid1}`}>
              <img
                src="img/certificate/certificate_icon1.png"
                className={s.icon_image}
              ></img>
              <p className={s.how_it_works_heading}>1 крок</p>
              <p> Обрати сертифікат</p>
            </div>
            <div className={`${s.block} ${s.grid2}`}>
              <img
                className={s.arrow_image}
                src="img/certificate/downArrow.svg"
              ></img>
            </div>
            <div className={`${s.block} ${s.grid3}`}>
              <img
                src="img/certificate/certificate_icon2.png"
                className={s.icon_image}
              ></img>
              <p className={s.how_it_works_heading}>2 крок</p>
              <p>
                Перевірити пошту <br></br> і зберегти сертифікат
              </p>
            </div>
            <div className={`${s.block} ${s.grid4}`}>
              <img
                className={s.arrow_image}
                src="img/certificate/downArrow.svg"
              ></img>
            </div>
            <div className={`${s.block} ${s.grid5}`}>
              <img
                src="img/certificate/certificate_icon3.png"
                className={s.icon_image}
              ></img>
              <p className={s.how_it_works_heading}>3 крок</p>
              <p>
                Записатися на пробний урок <br></br> і повідомити викладачу{' '}
                <br></br>про наявність сертифікату
              </p>
            </div>
          </div>

          <a href="#certificates">
            <button className={s.button}>вибрати сертифікат</button>
          </a>
        </div>
        <div className={s.accordion_container}>
          <span className={s.faq_header}>
            FAQ <br></br>по використанню сертифікатів
          </span>
          <div className={s.accordion}>
            {accordionDataCertificate?.map(({ title, content }) => (
              <Accordion key={title} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
