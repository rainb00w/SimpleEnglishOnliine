import Navigation from "../components/navigation";
import Footer from "../components/footer";
import s from "../styles/english_for_move.module.scss";
import React from "react";
import { Bird } from "../components/smallComponents/bird";
import Link from "next/link";
import useWindowSize from "../hooks/useWidthHook";
import Image from "next/image";
import girlDesktop from "../public/img/forAdults/girl2_desktop@2x.jpg";
import girlMobile from "../public/img/forAdults/girl2_mobile@2x.jpg";

export default function EnglishForMoveCourse() {
  const { width } = useWindowSize();
  return (
    <>
      <Navigation />
      Англійська для переїзду КУПИТИ КУРС Програма курсу Вступний вебінар “Як
      подолати мовний барʼєр” Після вебінару ти: позбавився страху говорити
      (навіть з новим королем Британії) розумієш свої помилки у вивченні
      англійської знаєш чітку систему освоєння мови Модуль 1.Знайомство з новими
      людьми Модуль 2. Митниця Модуль 3. Транспорт + як спитати про дорогу
      Модуль 4. Аренда житла Модуль 5. В лікарні Модуль 6. В магазині Модуль 7.
      В банку Модуль 8. В еміграційному центрі + фрази для біженців Модуль 9. В
      ресторані/кафе Модуль 10. Як записатися на безкоштовні курси закордоном
      Для кого цей курс? складові
      <p>
      <form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
  <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOjUsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNGW0Lkg0YLQvtCy0LDRgCIsInB1YmxpY19rZXkiOiJzYW5kYm94X2k5MjIyOTUyNzQ2NCIsImxhbmd1YWdlIjoicnUifQ==" />
  <input type="hidden" name="signature" value="Z1D0QbnNVbItKr6BBVoXYpxl7Ds=" />
  <button >
    <img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"
      />
    <span >Сплатити 5 UAH</span>
  </button>
</form>
      </p>
   
      {/* <div className="container">
          <div className={s.bonusesFlex} id="bonuses">
            <div>
              <div className={s.headerContainer}>
                <h2 className={s.bonusesH2}>Для кого цей курс?</h2>

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
                        Українці, що переїхали або планують переїздити закордон
                        і потребують базових знань на перший час.
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
                        Для тих, кому треба ВЖЕ говорити. Коли немає часу на
                        глибоке вивчення, а результат потрібний зараз.
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.plansContainer} id="groups">
          <div className="container">
            <div className={s.plansMainTextContainer}>
              <h2 className={s.plansMainText}>В команді & Самостійний</h2>
            </div>

            <div className={s.flexContainer}>
              <div className={s.listBoxes}>
                <div className={s.listFlex}>
                  <h3 className={s.listHeader}>
                    <span className={s.leftListHeader}>В команді</span>
                  </h3>
                  <ul>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>вступний вебінар</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        персональна зустріч з викладачем
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>10 відео уроків</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>3 розмовних клуби</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        чат з учасниками курсу
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        щоденні додаткові матеріали
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        готові вирази для спілкування
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>практичні завдання</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>поглиблена лексика</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        трекер корисних звичок для вивчення англійської на 3
                        місяці
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        1000 найнеобхідніших слів на кожен день
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        інструкція по складанню резюме
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={s.priceAndBtn}>
                  <span className={s.price}>1400 грн</span>
                  <Link href="#SignUpBlockDiv">
                    <button className={s.form_button}>КУПИТИ КУРС</button>
                  </Link>
                </div>
              </div>
              <div className={s.listBoxes}>
                <div className={s.listFlex}>
                  <h3 className={s.listHeader}>
                    <span className={s.rightListHeader}>Самостійний</span>
                  </h3>
                  <ul>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>вступний вебінар</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>10 відео-уроків</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        готові вирази для спілкування
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>практичні завдання</span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        трекер корисних звичок для вивчення англійської на 1
                        місяць
                      </span>
                    </li>
                    <li className={s.listItem}>
                      <Bird className={s.iconSize} />
                      <span className={s.listItemText}>
                        1000 найнеобхідніших слів на кожен день
                      </span>{" "}
                    </li>
                  </ul>
                </div>
                <div className={s.priceAndBtn}>
                  <span className={s.price}>700 грн</span>
                  <Link href="#SignUpBlockDiv">
                    <button className={s.form_button}>КУПИТИ КУРС</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <Footer />
    </>
  );
}
