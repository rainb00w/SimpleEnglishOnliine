import Link from 'next/link';
import s from '../../styles/footer.module.scss';
import { Children } from 'react';

export function FourthBlock(props) {
  return (
    <div className={s.footerFourthBlock}>
      <span className={s.footerFourthBlockkContacts}>Контакти: </span>
      <Link href="#">
        <button className={s.footerBTN}>Передзвоніть мені</button>{' '}
      </Link>

      <ul>
        <li>
          <div className={s.footerFourthBlockLiItem}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.svg_images}
            >
              <path d="M0.0352324 18.1399L1.12518 22.8647C1.27829 23.5326 1.86541 24 2.55314 24C14.3803 23.999 24 14.3807 24 2.55483C24 1.86768 23.5327 1.2799 22.8646 1.12756L18.1392 0.0377739C17.4509 -0.121686 16.7478 0.235483 16.4619 0.887105L14.2809 5.97278C14.026 6.5718 14.198 7.26974 14.7019 7.68127L17.226 9.70757C15.6329 12.9521 12.9946 15.5901 9.74866 17.1838L7.68221 14.662C7.27492 14.1567 6.57164 13.9819 5.97252 14.2413L0.886097 16.4213C0.274318 16.7432 -0.124157 17.4555 0.0352324 18.1399Z" />
            </svg>
            <Link href="tel:+380976853698">+38 (097) 685 36 98</Link>
          </div>
        </li>
        <li>
          <div className={s.footerFourthBlockLiItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={s.svg_images}
            >
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
            <Link href="mailto:simpleenglish@gmail.com">
              simpleenglish@gmail.com
            </Link>
          </div>
        </li>
      </ul>

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSepzomXG6saX1_V1Td8YzudY5yFoDMOb2eNEfELYgL1-_iwsg/viewform">
        <button className={s.footerBTN2}>Стати нашим викладачем</button>{' '}
      </Link>

      {props.children}
    </div>
  );
}
