import useWindowSize from "../hooks/useWidthHook";
import Image from "next/image";
import girlDesktop from "../public/img/forAdults/girl2_desktop@2x.jpg";
import girlMobile from "../public/img/forAdults/girl2_mobile@2x.jpg";
import s from "../styles/bonuses.module.scss";

export default function Bonuses() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="container">
        <div className={s.bonusesFlex} id="bonuses">
          <div>
            <div className={s.headerContainer}>
              <h2 className={s.bonusesH2}>
                Бонуси і плюшки <br></br>
                <span className={s.bonusesH2Color}>
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
            <ul className={s.ul}>
              <li className={s.li}>
                <div className={s.grid_container}>
                  <div>
                    <img
                      src="img/forAdults/1_vector@2x.png"
                      alt="Logo"
                      className={s.bonuses_images}
                    ></img>
                  </div>
                  <div>
                    <span className={s.listText}>
                      Знижка при оплаті за <b>3 місяці - 990 грн</b>
                    </span>
                  </div>
                </div>
              </li>
              <li className={s.li}>
                <div className={s.grid_container}>
                  <div>
                    <img
                      src="img/forAdults/2_vector@2x.png"
                      alt="Logo"
                      className={s.bonuses_images}
                    ></img>
                  </div>
                  <div>
                    <span className={s.listText}>
                      Знижка при оплаті за <b>6 місяців - 2970 грн</b>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={s.grid_container}>
                  <div>
                    <img
                      src="img/forAdults/3_vector@2x.png"
                      alt="Logo"
                      className={s.bonuses_images}
                    ></img>
                  </div>
                  <div>
                    <span className={s.listText}>
                      Як ще отримати додаткову знижку на навчання?
                    </span>
                    <span className={s.listText}>
                      Запроси друга/колегу в{" "}
                      <span lang="en">Simple English</span>
                      <b> і отримай бонус 500 грн,</b>
                      який ти можеш використати на навчання у школі. При
                      реєстрації на навчання друг має зазначити твоє імʼя і
                      повідомити про рекомендацію. Все!
                    </span>
                  </div>
                </div>
              </li>
              <li className={s.li}>
                <div className={s.grid_container}>
                  <div>
                    <img
                      src="img/forAdults/4_vector@2x.png"
                      alt="Logo"
                      className={s.bonuses_images}
                    ></img>
                  </div>
                  <div>
                    <span className={s.listText}>
                      Щомісячний <b>розіграш 3 уроків</b> серед наших фоловерів,
                      які відмічають <span lang="en">Simple English</span> на
                      своїй сторінці.
                      <a href="https://instagram.com/simple.english.online?igshid=YmMyMTA2M2Y=">
                        {" "}
                        Instagram
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
