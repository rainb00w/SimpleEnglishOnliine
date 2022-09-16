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
                      <b> і отримай бонус 500 грн, </b>
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
                        <button className={s.instagramBtn}>
                        Відмітити Simple English в
                          <svg
                          className={s.instagramIcon}
                            width="26"
                            height="26"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.9154 7.42505C10.9648 7.42505 7.69141 10.642 7.69141 14.649C7.69141 18.6561 10.9083 21.873 14.9154 21.873C18.9224 21.873 22.1394 18.5997 22.1394 14.649C22.1394 10.6984 18.866 7.42505 14.9154 7.42505ZM14.9154 19.2769C12.3757 19.2769 10.2875 17.1887 10.2875 14.649C10.2875 12.1094 12.3757 10.0212 14.9154 10.0212C17.4551 10.0212 19.5433 12.1094 19.5433 14.649C19.5433 17.1887 17.4551 19.2769 14.9154 19.2769Z"
                              fill="#1B1B1B"
                            />
                            <path
                              d="M22.4214 8.89251C23.3253 8.89251 24.058 8.15974 24.058 7.25582C24.058 6.35191 23.3253 5.61914 22.4214 5.61914C21.5174 5.61914 20.7847 6.35191 20.7847 7.25582C20.7847 8.15974 21.5174 8.89251 22.4214 8.89251Z"
                              fill="#1B1B1B"
                            />
                            <path
                              d="M26.6544 3.02292C25.187 1.49911 23.0988 0.708984 20.7285 0.708984H9.10237C4.19231 0.708984 0.918945 3.98235 0.918945 8.8924V20.4621C0.918945 22.8889 1.70907 24.9771 3.28932 26.5009C4.81313 27.9682 6.84487 28.7019 9.1588 28.7019H20.672C23.0988 28.7019 25.1306 27.9118 26.598 26.5009C28.1218 25.0335 28.9119 22.9453 28.9119 20.5185V8.8924C28.9119 6.52203 28.1218 4.49029 26.6544 3.02292ZM26.4286 20.5185C26.4286 22.2681 25.8078 23.679 24.792 24.6384C23.7761 25.5979 22.3652 26.1058 20.672 26.1058H9.1588C7.46568 26.1058 6.05475 25.5979 5.03887 24.6384C4.023 23.6226 3.51507 22.2116 3.51507 20.4621V8.8924C3.51507 7.19928 4.023 5.78835 5.03887 4.77248C5.99831 3.81304 7.46568 3.3051 9.1588 3.3051H20.7849C22.478 3.3051 23.889 3.81304 24.9048 4.82891C25.8643 5.84479 26.4286 7.25572 26.4286 8.8924V20.5185Z"
                              fill="#1B1B1B"
                            />
                          </svg>
                        </button>
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
