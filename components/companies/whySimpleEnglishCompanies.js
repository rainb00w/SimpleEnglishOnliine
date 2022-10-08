import s from "../../styles/whySimpleEnglishCompanies.module.scss";
import Link from "next/link";
import useWindowSize from "../../hooks/useWidthHook";


export default function WhySimpleEnglishCompanies() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="container">
        <div className={s.mainContainer}>
          <div className={s.header}>
            Чому
            <p className={s.headerP}>Simple English?</p>
          </div>
          <div className={s.gridContainer}>
            <div className={s.gridItem1}>
            <img
                  src="img/forCompanies/why1.webp"
                  className={s.image}
                />
              <p>Безкоштовне тестування кожного члена команди.</p>
            </div>
            <div className={s.gridItem2}>
            <img
                  src="img/forCompanies/why2.webp"
                  className={s.image}
                />
              <p>Індивідуальна програма під вашу компанію.</p>
              Викладач допоможе визначити мету та ціль навчання, створить
              програму під ваш запит і буде мотивувати щоразу!
            </div>
            <div className={s.gridItem3}>
            <img
                  src="img/forCompanies/why3.webp"
                  className={s.image}
                />
              { width > 768 && (
                <>
                  <p>Гарантований результат.</p> Студенти Simple English завжди
                  досягають своєї цілі, а викладачі зацікавлені у
                  вашомурезультаті. Ніякого waste of time, лише achieving goals
                  as soon as possible!{" "}
                </>
              )}
              {width < 768 && (
                <p>
                  В Simple English все продумано як для керівника/HR-A,так і для
                  працівників компанії.
                </p>
              )}
            </div>
            <div className={s.gridItem4}>
            <img
                  src="img/forCompanies/why4.webp"
                  className={s.image}
                />
              <p>Friendly-атмосфера.</p>
              Викладачі Simple English справжні котики. Вони знають, що запорука
              успіху - класна атмосфера, мотивація та командна робота зі
              студентами.
            </div>
            <div className={s.gridItem5}>
            <img
                  src="img/forCompanies/why5.webp"
                  className={s.image}
                />
              <p>2 безкоштовних Speaking Club на місяць.</p>
            </div>
            <div className={s.gridItem6}>
            <img
                  src="img/forCompanies/why6.webp"
                  className={s.image}
                />
              <p>
                В Simple English все продумано як для керівника/HR-A,так і для
                працівників компанії.
              </p>
            </div>
          </div>

          <div className={s.footerBtnContainer} >
          <Link href="#SignUpBlockDiv"> 
            <button className={s.footerBtn}>записатись на консультацію</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
