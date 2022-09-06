import Image from "next/image";
import s from "../styles/about.module.scss";
import firstImage from "../public/img/forAdults/1_1@2x.png";
import secondImage from "../public/img/forAdults/2_1@2x.png";
import thirdImage from "../public/img/forAdults/3_1@2x.png";
import fourthImage from "../public/img/forAdults/4_1@2x.png";
import fifthImage from "../public/img/forAdults/5_1@2x.png";

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
              
              <Image
                src={firstImage}
                alt="Simple Eglish Logo"
                width={177}
                height={177}
                placeholder="blur" // Optional blur-up while loading
              />
              <span className={s.abouListText}>Інтерактивна платформа</span>
            </li>
            <li className={s.aboutListItem}>
              
              <Image
                src={secondImage}
                alt="Simple Eglish Logo"
                width={177}
                height={177}
                placeholder="blur" // Optional blur-up while loading
              />
              <span className={s.abouListText}>Безкоштовний Speaking club</span>
            </li>
            <li className={s.aboutListItem}>
              
              <Image
                src={thirdImage}
                alt="Simple Eglish Logo"
                width={177}
                height={177}
                placeholder="blur" // Optional blur-up while loading
              />
              <span className={s.abouListText}>Персональна програма</span>
            </li>
            <li className={s.aboutListItem}>
              
              <Image
                src={fourthImage}
                alt="Simple Eglish Logo"
                width={177}
                height={177}
                placeholder="blur" // Optional blur-up while loading
              />
              <span className={s.abouListText}> Сучасна жива англійська</span>
            </li>
            <li className={s.aboutListItem}>
              
              <Image
                src={fifthImage}
                alt="Simple Eglish Logo"
                width={177}
                height={177}
                placeholder="blur" // Optional blur-up while loading
              />
              <span className={s.abouListText}> Чуйні та професійні викладачі</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
