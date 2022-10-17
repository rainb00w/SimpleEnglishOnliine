import s from "../../styles/sc/reviewsSC.module.scss";

export default function ReviewsSC() {
  return (
    <>
      <div className={s.main_container}>
        <div className={s.header_text_container}>
          <h2 className={s.header_text}>Відгуки про клаб</h2>
        </div>
        <img src="img/sc/review_sc.webp" className={s.review_image} />

        <button className={s.leave_feedback}>залишити відгук</button>
        <img src="img/sc/telegram_sign.webp" className={s.image} />
        <button className={s.contact_with_manager}>зв’язатися з менеджером</button>
      </div>
    </>
  );
}
