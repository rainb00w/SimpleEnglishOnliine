import s from "../styles/groups.module.scss";
import Link from "next/link";
import { Bird } from "./smallComponents/bird";



export default function Plans() {
  return (
    <>
      <div className={s.plansContainer} id="groups">
        <div className="container">
          <div className={s.plansMainTextContainer}>
            <h2 className={s.plansMainText}>В Групі & Індивідуально</h2>
          </div>

          <div className={s.flexContainer}>
            <div className={s.listBoxes}>
              <div className={s.listFlex}>
                <h3 className={s.listHeader}>
                  <span className={s.leftListHeader}>В групі</span>
                </h3>
                <ul>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      14 годин розмовної практики
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Маленька група до 4 студентів, часу точно вистачить на
                      всіх
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Дисципліна завдяки стабільному графіку
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Group mates за схожими інтересами та рівнем знань
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Активні дискусії і розвиток soft skills
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Безкоштовний Speaking Club
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Цікаві завдання від викладача
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Вивчення мови легко і ефективно
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Контроль результату кожні 2 місяці
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Підтримка менеджера 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div className={s.priceAndBtn}>
                <span className={s.price}>1900 грн</span>
                <Link href="#SignUpBlockDiv">
                  <button className={s.form_button}>
                    записатися на пробний урок
                  </button>
                </Link>
              </div>
            </div>
            <div className={s.listBoxes}>
              <div className={s.listFlex}>
                <h3 className={s.listHeader}>
                  <span className={s.rightListHeader}>Індивідуально</span>
                </h3>
                <ul>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      14 годин розмовної практики
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>Персональна програма</span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Твій власний графік, можливість переносити заняття
                      unlimited
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>Лише цікаві теми</span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Безкоштовний Speaking Club
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Швидке досягнення цілі
                    </span>{" "}
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Контроль результату кожні 2 місяці
                    </span>
                  </li>
                  <li className={s.listItem}>
                    <Bird className={s.iconSize} />
                    <span className={s.listItemText}>
                      Підтримка менеджера 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div className={s.priceAndBtn}>
                <span className={s.price}>3500 грн</span>
                <Link href="#SignUpBlockDiv">
                  <button className={s.form_button}>
                    записатися на пробний урок
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
