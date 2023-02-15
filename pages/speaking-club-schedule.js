import Navigation from '../components/navigation';
import Footer from '../components/footer';
import s from '../styles/speaking-club-schedule.module.scss';

import React from 'react';

export default function errorPage() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={s.club_schedule_container}>
          <div className={s.club_schedule_heading}>
            <h2>Розклад на найближчі 7 днів</h2>
          </div>
          <div className={s.club_schedule}>
            <ul className={s.club_schedule_list}>
              <li>
                <p className={s.club_schedule_list_time}>чт 17:30</p>
                <div className={`${s.club_schedule_list_item} ${s.item1}`}>
                  <img
                    src="img/speaking-club-schedule/why1.webp"
                    alt="Logo"
                    className={s.club_schedule_list_item_image}
                  ></img>
                  <h3 className={s.club_schedule_list_item_heading}>
                    Speaking <br></br>Club
                  </h3>
                </div>

                <p className={s.club_schedule_list_item_text}>
                  “Поки важко говорити”
                </p>

                <div className={s.club_schedule_list_item_link_container}>
                  <a
                    href="https://secure.wayforpay.com/payment/s9b471b11cd12"
                    className={s.club_schedule_list_item_link}
                  >
                    Записатись
                  </a>
                </div>
              </li>
              <li>
                <p className={s.club_schedule_list_time}>сб 11:30</p>
                <div className={`${s.club_schedule_list_item} ${s.item2}`}>
                  <img
                    src="img/speaking-club-schedule/why2.webp"
                    alt="Logo"
                    className={s.club_schedule_list_item_image}
                  ></img>
                  <h3 className={s.club_schedule_list_item_heading}>
                    Speaking <br></br>Club
                  </h3>
                </div>

                <p className={s.club_schedule_list_item_text}>
                  “На середині шляху”
                </p>
                <div className={s.club_schedule_list_item_link_container}>
                  <a
                    href="https://secure.wayforpay.com/payment/s9b471b11cd12"
                    className={s.club_schedule_list_item_link}
                  >
                    Записатись
                  </a>
                </div>
              </li>
              <li>
                <p className={s.club_schedule_list_time}>пт 18:00</p>
                <div className={`${s.club_schedule_list_item} ${s.item3}`}>
                  <img
                    src="img/speaking-club-schedule/why3.webp"
                    alt="Logo"
                    className={s.club_schedule_list_item_image}
                  ></img>
                  <h3 className={s.club_schedule_list_item_heading}>
                    Speaking <br></br>Club
                  </h3>
                </div>

                <p className={s.club_schedule_list_item_text}> “Прошарений”</p>
                <div className={s.club_schedule_list_item_link_container}>
                  <a
                    href="https://secure.wayforpay.com/payment/s9b471b11cd12"
                    className={s.club_schedule_list_item_link}
                  >
                    Записатись
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
