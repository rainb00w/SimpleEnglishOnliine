import s from "../../styles/sc/whySC.module.scss";

export default function WhySC() {
  return (
    <>
      <div className={`container`}>
        <div className={s.main_container}>
          <div>
            <h2 className={s.header_text}>
              Чому <br></br>
              <span className={s.header_text_color}>Speaking Club?</span>
            </h2>
          </div>
          <div>
            <ul className= {`${s.ul_list} ${s.grid_container}`}>
              <li className={`${s.li_item} ${s.grid_item1}`}>
                <img src="img/sc/why1.webp" className={s.image} />
                <span className={`${s.span_text} ${s.span_text_color}`}> 100 % зустрічі ми говоримо, а це 1,5 години!</span>
              </li>
              <li className={`${s.li_item} ${s.grid_item2}`}>
                <img src="img/sc/why2.webp" className={s.image} />
                <span className={s.span_text}>
                  <p className={s.span_text_color}>
                     Лише позитивні емоції. 
                  </p>
                 
                  Ніхто не буде тебе критикувати,
                  виправляти чи ставити незручні питання. Лише задоволення.
                </span>
              </li>
              <li className={`${s.li_item} ${s.grid_item3}`} >
                <img src="img/sc/why3.webp" className={s.image} />
                <span className={s.span_text}>
                <p className={s.span_text_color}> 3 рівня на вибір.</p>
                  Від “поки важко говорити” до “прошарений”.
                  Тобі точно буде комфортно з groupmates саме твого рівня.
                </span>
              </li>
              <li className={`${s.li_item} ${s.grid_item4}`}>
                <img src="img/sc/why4.webp" className={s.image} />
                <span className={s.span_text}>
                <p className={s.span_text_color}> Цікаві теми щотижня.</p>
                   Будемо обговорювати здоровий спосіб
                  життя, саморозвиток, світові тренди і багато іншого.
                </span>
              </li>
              <li className={`${s.li_item} ${s.grid_item5}`}>
                <img src="img/sc/why5.webp" className={s.image} />
                <span className={s.span_text}>
                <p className={s.span_text_color}>Невеликі групи.</p>
                   В групі до 7 студентів, часу точно вистачить
                  на всіх. Ми проводимо клаби навіть якщо запишеться 7 людей, а
                  прийдеш тільки ти — у нас усе чітко.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
