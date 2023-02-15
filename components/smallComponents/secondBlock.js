import Link from 'next/link';
import { useRouter } from 'next/router';
import s from '../../styles/footer.module.scss';

export function SecondBlock(props) {
  const router = useRouter();
  return (
    <>
      <div className={s.footerSecondBlock}>
        {router.pathname !== '/test' ? (
          <>
            <Link href="#about">Про нас</Link>
            {/* <Link href="/forCompanies">
          <a>Для компаній</a>
        </Link> */}
            <Link href="#groups">Групи</Link>
            <Link href="#bonuses">Бонуси</Link>
            <Link href="/test">Тест</Link>
            {/* <Link href="#">
          <a> Відгуки</a>
        </Link> */}
            <Link href="#faq">FAQ</Link>
            {/* <Link href="#">
          <a> Блог</a>
        </Link> */}
          </>
        ) : (
          <Link href="/">На головну</Link>
        )}

        {props.children}
      </div>
    </>
  );
}
