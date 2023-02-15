import Link from 'next/link';
import s from '../../styles/footer.module.scss';

export function ThirdBlock() {
  return (
    <div className={s.footerThirdBlock}>
      <div className={s.footerThirdBlockLinks}>
        <Link href="#" className={s.footerThirdBlockLinksItem}>
          Пробний урок Онлайн
        </Link>
        <Link href="#" className={s.footerThirdBlockLinksItem}>
          Подарувати сертифікат
        </Link>
        <Link href="#" className={s.footerThirdBlockLinksItem}>
          Навчальна розсилка
        </Link>
      </div>
    </div>
  );
}
