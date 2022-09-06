import Link from "next/link";
import { useRouter } from "next/router";
import s from "../../styles/footer.module.scss";

export function SecondBlock(props) {
  const router = useRouter();
  return (
    <>
      <div className={s.footerSecondBlock}>
      {(router.pathname !== "/test") ? <>
       <Link href="#about">
          <a>Про нас</a>
        </Link>
        {/* <Link href="/forCompanies">
          <a>Для компаній</a>
        </Link> */}
        <Link href="#groups">
          <a> Групи</a>
        </Link>
        <Link href="#bonuses">
          <a>Бонуси</a>
        </Link>
        <Link href="/test">
          <a>Тест </a>
        </Link>
        {/* <Link href="#">
          <a> Відгуки</a>
        </Link> */}
        <Link href="#faq">
          <a>FAQ </a>
        </Link>
        {/* <Link href="#">
          <a> Блог</a>
        </Link> */}
      
      </> :    ( 
              <Link href="/">
              <a>На головну</a>
            </Link>
            )}

       
        {props.children}
      </div>
    </>
  );
}
