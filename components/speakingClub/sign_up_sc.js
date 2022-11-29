import s from "../../styles/sc/sign_up_sc.module.scss";

export default function SignUpSC() {
  return (
    <>
      <div className={s.main_container}>
        <div className={s.header_container}>
          <h2 className={s.header}> Як записатися на клаб ?</h2>
        </div>

        <div className={s.blocks}>
          <div className={`${s.block} ${s.grid1}`}>
            <img src="img/sc/sign1.webp" className={s.image} />
            <div className={s.item_header}>
              <p>1 крок</p>
            </div>
            <div className={s.item_text}>
              <p>
                Обрати тему,<br></br> час і зареєструватися
              </p>
            </div>
            <button className={s.button}>обрати графік</button>
          </div>
          <div className={`${s.block} ${s.grid2}`}>
            <img src="img/sc/sign2.webp" className={s.image} />
            <div className={s.item_header}>
              <p>2 крок</p>
            </div>
            <div className={s.item_text}>
              <p>
                Завантажити Zoom <br></br>
                на телефон або компʼютер
              </p>
            </div>

            {/* <a href="https://zoom.us/support/download">
             
            </a> */}
            <button className={s.button}>завантажити Zoom</button>
          </div>
          <div className={`${s.block} ${s.grid3}`}>
            <img src="img/sc/sign3.webp" className={s.image} />
            <div className={s.item_header}>
              <p>3 крок</p>
            </div>
            <div className={s.item_text}>
              <p>
                Підключитися<br></br>і насолоджуватися бесідами
              </p>
            </div>
            <button className={s.button}>підключитися</button>
          </div>
        </div>
      </div>
    </>
  );
}
