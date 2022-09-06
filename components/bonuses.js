
import useWindowSize from "../hooks/useWidthHook"
import Image from "next/image";
import sign1 from "../public/img/forAdults/1_vector@2x.png";
import sign2 from "../public/img/forAdults/2_vector@2x.png";
import sign3 from "../public/img/forAdults/3_vector@2x.png";
import sign4 from "../public/img/forAdults/4_vector@2x.png";
import girlDesktop from "../public/img/forAdults/girl2_desktop@2x.jpg";
import girlMobile from "../public/img/forAdults/girl2_mobile@2x.jpg";
import s from "../styles/bonuses.module.scss";

export default function Bonuses() {
  const {width} = useWindowSize();

  return (
    <>
      <div className="container">
        <div className={s.bonusesFlex} id="bonuses">
          <div>
            <div className={s.headerContainer}>
              <h2 className={s.bonusesH2}>
                Бонуси і плюшки
                <span className={s.bonusesH2Color}>
                  {" "}
                  від <span lang="en">Simple English</span>
                </span>
              </h2>

              {width < 1200 ? (
                <Image
                  src={girlMobile}
                  alt="Teacher"
                  //  width={470}
                  //  height={672}
                  placeholder="blur" // Optional blur-up while loading
                />
              ) : (
                <Image
                  src={girlDesktop}
                  alt="Teacher"
                  width={470}
                  height={672}
                  placeholder="blur" // Optional blur-up while loading
                />
              )}
            </div>
          </div>

          <div className={s.bonusesRightContainer}>
            <div className={s.bonusesImages}>
              <div className={s.img1}>
                <Image
                  className={s.listImage}
                  src={sign1}
                  alt="Teacher"
                  width={80}
                  height={80}
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className={s.img2}>
                <Image
                  className={s.listImage}
                  src={sign2}
                  alt="Teacher"
                  width={80}
                  height={80}
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className={s.img3}>
                <Image
                  className={s.listImage}
                  src={sign3}
                  alt="Teacher"
                  width={80}
                  height={80}
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className={s.img4}>
                <Image
                  className={s.listImage}
                  src={sign4}
                  alt="Teacher"
                  width={80}
                  height={80}
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>

            <ul className={s.ul}>
              <li className={s.li}>
                <span className={s.listText}>
                  Знижка при оплаті за <b>3 місяці - 990 грн</b>
                </span>
              </li>
              <li className={s.li}>
                <span className={s.listText}>
                  Знижка при оплаті за <b>6 місяців - 2970 грн</b>
                </span>
              </li>
              <li>
                <span className={s.listText}>
                  Як ще отримати додаткову знижку на навчання?
                </span>
              </li>
              <li>
                <span className={s.listText}>
                  Запроси друга/колегу в <span lang="en">Simple English</span> і
                  <b>отримай бонус 500 грн,</b>
                  який ти можеш використати на навчання у школі. При реєстрації
                  на навчання друг має зазначити твоє імʼя і повідомити про
                  рекомендацію. Все!
                </span>
              </li>
              <li className={s.li}>
                <span className={s.listText}>
                  Щомісячний <b>розіграш 3 уроків</b> серед наших фоловерів, які
                  відмічають <span lang="en">Simple English</span> на своїй
                  сторінці. (Активне посилання на сторінку )
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
