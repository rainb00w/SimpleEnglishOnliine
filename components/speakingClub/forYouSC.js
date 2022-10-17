import s from "../../styles/sc/forYouSC.module.scss";
import useWindowSize from "../../hooks/useWidthHook";

export default function ForYouSC() {
  const { width } = useWindowSize();

  return (
    <>
      <div className={s.header_container}>
        <h2 className={s.header_text}>Цей клаб для тебе, якщо ти...</h2>
      </div>

      <div className={s.main_container}>
        <div className={s.image_container}>
          {width > 1200 && (
            <img src="img/sc/for_you_desktop.webp" className={s.image} />
          )}
          {width < 1200 && width > 768 && (
            <img src="img/sc/for_you_tablet.webp" className={s.image} />
          )}
          {width < 768 && (
            <img src="img/sc/for_you_mobile.webp" className={s.image} />
          )}
        </div>
        <div className={s.main_grid_container}>
          <div className={s.grid_container}>
            <div>
              <img src="img/sc/arrow.webp" className={s.bonuses_images}></img>
            </div>
            <div>
              <p className={s.listText}>
                Хочеш нарешті заговорити, без страху зробити помилку
              </p>
            </div>
          </div>

          <div className={s.grid_container}>
            <div>
              <img src="img/sc/arrow.webp" className={s.bonuses_images}></img>
            </div>
            <div>
              <p className={s.listText}>
                Дещо знаєш, але поки соромишся говорити
              </p>
            </div>
          </div>

          <div className={s.grid_container}>
            <div>
              <img src="img/sc/arrow.webp" className={s.bonuses_images}></img>
            </div>
            <div>
              <p className={s.listText}>
                Хочеш поліпшити вимову та розширити словниковий запас
              </p>
            </div>
          </div>

          <div className={s.grid_container}>
            <div>
              <img src="img/sc/arrow.webp" className={s.bonuses_images}></img>
            </div>
            <div>
              <p className={s.listText}>Забуваєш слова під час розмови</p>
            </div>
          </div>

          <div className={s.grid_container}>
            <div>
              <img src="img/sc/arrow.webp" className={s.bonuses_images}></img>
            </div>
            <div>
              <p className={s.listText}>
                Тобі не вистачає часу на самостійне вивчення і повноцінні
                заняття
              </p>
            </div>
          </div>

          <div>
            <button className={s.button}>записатись на speaking club</button>
          </div>
        </div>
      </div>
    </>
  );
}
