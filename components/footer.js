import Link from "next/link";
import useWindowSize from "../hooks/useWidthHook"
import s from "../styles/footer.module.scss";
import { ThirdBlock } from "./smallComponents/thirdBlock";
import { FirstBlock } from "./smallComponents/firstBlock";
import { SecondBlock } from "./smallComponents/secondBlock";
import { FourthBlock } from "./smallComponents/fourthBlock";

export default function Footer() {

  const {width} = useWindowSize();


  return (
    <>
      <div className={s.footerWrapper} id="contacts">
        <div className="container">
          <div className={s.footerWrapperFlex}>
            <FirstBlock />

            <SecondBlock>{width < 768 && <ThirdBlock />}</SecondBlock>

            {width > 1199 && <ThirdBlock />}

            {width > 767 && (
              <FourthBlock>
                {width < 1200 && width > 767 && <ThirdBlock />}
              </FourthBlock>
            )}
          </div>
          {width < 768 && <FourthBlock></FourthBlock>}

          <div className={s.footerWrapperFlexBottom}>
            <div>
              <Link href="public_offer_agreement">
                <a>Договір-оферта |</a>
              </Link>
              <Link href="privacy_policy">
                <a>Політика конфіденційності</a>
              </Link>
              {width < 1200 && (
                <span className={s.footerFourthBlockCompanyName}>
                  | Simple English
                </span>
              )}
            </div>
            {width > 1200 && (
              <span className={s.footerFourthBlockCompanyName}>
                | Simple English
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
