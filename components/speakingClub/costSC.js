import s from "../../styles/sc/costSC.module.scss";

export default function CostSC() {
  return (
    <>
      <div className={s.main_container}>
        <div className={s.header}>
          <h2 className={s.header_text}>Вартість</h2>
        </div>
        <div className={s.blocks}>
          <div className={s.block}>
            <span className={s.price_header}>Єдиноразове відвідування</span>
            <span className={s.price_main_text}>
              1 заняття <br></br> в Speaking Club
            </span>
            <span className={s.price}>
              175<span className={s.price_text}>грн</span>
            </span>
            <a href="https://secure.wayforpay.com/payment/s9b471b11cd12">
              <button className={`${s.button} ${s.grid1}`}>записатися</button>
            </a>
          </div>

          <div className={s.block}>
            <span className={s.price_header}>Підписка 4 клаби/міс. </span>
            <span className={s.price_main_text}>
              4 заняття/місяць в Speaking Club
            </span>
            <span className={s.price}>
              600
              <span className={s.price_text}>грн</span>
            </span>
            <a href="https://secure.wayforpay.com/payment/sb4f472e32cb1">
              <button className={`${s.button} ${s.grid1}`}>записатися</button>
            </a>
          </div>

          <div className={s.block}>
            <span className={s.price_header}>Підписка 8 клабів/міс. </span>
            <span className={s.price_main_text}>
              8 занять/місяць в Speaking Club
            </span>
            <span className={s.price}>
              950
              <span className={s.price_text}>грн</span>
            </span>
            <a href="https://secure.wayforpay.com/payment/sd05b67674f2e">
              <button className={`${s.button} ${s.grid1}`}>записатися</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
