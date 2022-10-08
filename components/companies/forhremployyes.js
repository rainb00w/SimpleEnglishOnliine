import React from "react";
import s from "../../styles/forhremployyes.module.scss";

export default function Forhremployyes() {
  return (
    <>
      <div className="container">
        <div className={s.headerContainer}>
          <h2 className={s.headerText}>
            Ми знаємо, якою ефективною та згуртованою може бути командна, яка
            навчається разом!
          </h2>
        </div>
        <div className={s.mainContainer}>
          <div className={s.leftContainer}>
            <h3 className={s.leftContainerHeader}>Для керівників/HR</h3>
            <ul className={s.ul_list}>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies1.webp"
                  className={s.image}
                />

                <div className={s.text_container}>
                  <p> Гнучкий підбір курсів.</p>
                  Індивідуальне чи групове навчання. Повністю адаптована
                  програма.
                </div>
              </li>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies2.webp"
                  className={s.image}
                />
                <div className={s.text_container}>
                  <p>Персональний менеджер.</p>
                  Він за руку проведе компанію від демо-урока до випущених
                  студентів.
                </div>
              </li>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies3.webp"
                  className={s.image}
                />
                <div className={s.text_container}>
                  <p> Контроль прогресу.</p>
                  Щомісяця аналізуйте звіти про успішність / відвідуваність /
                  задоволенність навчанням.
                </div>
              </li>
            </ul>
          </div>
          <div className={s.rightContainer}>
            <h3 className={s.rightContainerHeader}>Для працівників</h3>
            <ul className={s.ul_list}>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies4.webp"
                  className={s.image}
                />
                <div className={s.text_container}>
                  <p>Мотивація і залучення </p>
                  на всіх етапах. Робота на інтерактивній платфомі. Лише цікаві
                  теми і корисне домашнє завдання.
                </div>
              </li>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies5.webp"
                  className={s.image}
                />
                <div className={s.text_container}>
                  <p> Повне занурення в мовне середовище.</p>
                  100% заняття проходить англійською не залежно від рівня
                  студентів.
                </div>
              </li>
              <li className={s.grid_list}>
                <img
                  src="img/forCompanies/companies6.webp"
                  className={s.image}
                />
                <div className={s.text_container}>
                  <p> Гнучкий графік.</p>
                  Працівники зможуть самостійно обирати зручний розклад і темп
                  навчання.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
