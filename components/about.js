import Image from "next/image";
import React from 'react';
import s from "../styles/about.module.scss";
// import firstImage from "img/forAdults/1@2x.png";
// import secondImage from "../public/img/forAdults/2@2x.png";
// import thirdImage from "../public/img/forAdults/3@2x.png";
// import fourthImage from "../public/img/forAdults/4@2x.png";
// import fifthImage from "../public/img/forAdults/5@2x.png";

export default function About() {
  return (
    <>
      <div className="container">
        <div id="about">
          <div className={s.flexCentered}>
            <h2 className={s.aboutHeader}>
              <span className={s.aboutSchool}>Про школу </span>
              <span className={s.aboutSimpleEnglish} lang="en">Simple English</span>
            </h2>
            <p className={s.underHeader}>
              Наша мета – щоб ти заговорив.<br></br> Ми готуємо до реального
              життя, а не вправ у підручнику.
            </p>
          </div>

          <ul className={s.aboutList}>
            <li className={s.aboutListItem}>
            <img src="img/forAdults/1@2x.png" alt="Logo" className={s.about_images} />
              <span className={s.abouListText}>Інтерактивна платформа</span>
            </li>
            <li className={s.aboutListItem}>
            <img src="img/forAdults/2@2x.png" alt="Logo" className={s.about_images} />
        
              <span className={s.abouListText}>Безкоштовний Speaking club</span>
            </li>
            <li className={s.aboutListItem}>
            <img src="img/forAdults/3@2x.png" alt="Logo" className={s.about_images} />
       
              <span className={s.abouListText}>Персональна програма</span>
            </li>
            <li className={s.aboutListItem}>
            <img src="img/forAdults/4@2x.png" alt="Logo" className={s.about_images} />
         
              <span className={s.abouListText}> Сучасна жива англійська</span>
            </li>
            <li className={s.aboutListItem}>
            <img src="img/forAdults/5@2x.png" alt="Logo" className={s.about_images} />
         
              <span className={s.abouListText}> Чуйні та професійні викладачі</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
