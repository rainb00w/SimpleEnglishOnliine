import Image from "next/image";
import Link from "next/link";
import s from "../styles/testLink.module.scss";
import testLinkPic from "../public/img/forAdults/testLinkPic.png";

export default function TestLink() {
  return (
    <>
      <div className={s.testLinkDiv}>
        <div className={s.testLinkDivImg}> 
           <Image
          // className={s.header_bigImage}
          src={testLinkPic}
          alt="Teacher"
          // width={290}
          // height={290}
          placeholder="blur" // Optional blur-up while loading
        />
        </div>
       

        <div className={s.testLinkText}>
          <h3 className={s.testLinkH3}>Тест</h3>
          <span className={s.testLinkP}>на визначення рівня англійської</span>
          <Link href="test">
            <button className={s.testLinkBtn}>Пройти тест</button>
          </Link>
        </div>
      </div>
    </>
  );
}
