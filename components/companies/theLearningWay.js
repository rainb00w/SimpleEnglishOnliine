import Link from 'next/link';
import useWindowSize from '../../hooks/useWidthHook';
import roadMobile from '../../public/img/forCompanies/roadMobile.webp';
import roadTablet from '../../public/img/forCompanies/roadTablet.webp';
import roadDesktop from '../../public/img/forCompanies/roadDesktop.webp';
import s from '../../styles/theLearningWay.module.scss';

export default function TheLearningWay() {
  const { width } = useWindowSize();

  return (
    <>
      <div className={s.mainContainer}>
        <div className="container">
          <div className={s.headerText}>
            <h3>Маршрут навчання вашої компанії з нами </h3>
          </div>
          <div>
            {width < 768 && (
              <img
                src={roadMobile}
                alt="Teacher"
                //  width={470}
                //  height={672}
                placeholder="blur" // Optional blur-up while loading
              />
            )}
            {width < 1200 && width > 768 && (
              <img
                src={roadTablet}
                alt="Teacher"
                //  width={470}
                //  height={672}
                placeholder="blur" // Optional blur-up while loading
              />
            )}

            {width > 1200 && (
              <img
                src={roadDesktop}
                alt="Teacher"
                //  width={470}
                //  height={672}
                placeholder="blur" // Optional blur-up while loading
              />
            )}
          </div>
          <div className={s.formButtonContainer}>
            <Link href="#SignUpBlockDiv">
              <button className={s.form_button}>
                записатися на пробний урок
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
