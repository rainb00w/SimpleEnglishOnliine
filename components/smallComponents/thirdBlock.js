import Link from "next/link";
import s from "../../styles/footer.module.scss";


export function ThirdBlock() {
  return (
    <div className={s.footerThirdBlock}>
      <div className={s.footerThirdBlockLinks}>
        <Link href="#">
          <a> Пробний урок Онлайн</a>
        </Link>
        <Link href="#">
          <a> Подарувати сертифікат</a>
        </Link>
        <Link href="#">
          <a> Навчальна розсилка</a>
        </Link>
      </div>


    </div>
  );
}
