import { useRef, useState } from "react";
import s from "../styles/navigation.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import logoImg from "../public/logo_rgb@2x.png";
import burgerBTN from "../public/burgerBTN.svg";
import crossBTN from "../public/cross.svg";
export default function Navigation() {
  const navRef = useRef();

  const [toggled, setToggled] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setToggled(!toggled);
  };

  const router = useRouter();

  return (
    <div className={s.bgColor}>
      <div className="container">
        <header className={s.navigationItems}>
          <div className={s.header_navigation_logo}>
            <Link href="/">
              <Image
                src={logoImg}
                alt="Simple Eglish Logo"
                width={60}
                height={60}
                placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </div>

          <nav className={s.navBar} ref={navRef}>
            
            {(router.pathname !== "/test") ? 
            
            ( 
              <>
              
              <Link href="#about">
              <a>Про нас</a>
            </Link>
            {/* <Link href="/companies">
              <a>Для компаній</a>
            </Link> */}
            <Link href="#groups">
              <a> Групи</a>
            </Link>
            <Link href="/test">
              <a>Тест </a>
            </Link>
            {/* <Link href="#reviews">
              <a> Відгуки</a>
            </Link> */}
            <Link href="#faq">
              <a>FAQ </a>
            </Link>
            {/* <Link href="/blog">
              <a> Блог</a>
            </Link> */}
            <Link href="#contacts">
              <a> Контакти</a>
            </Link>
            <button className="nav_btn nav_close_btn" onClick={showNavBar}>
              <Image
                src={crossBTN}
                alt="menu button"
                width={34}
                height={21}

                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </button>
              
              </>
              
            )
            :
            ( 
              <Link href="/">
              <a>На головну</a>
            </Link>
            )
            }
            {toggled && (
              <div className={s.form_button_container}>
                <button type="submit" className={s.form_button}>
                  передзвоніть мені
                </button>
              </div>
            )}
          </nav>

          {!toggled && (
            <div className={s.socialIcons}>
              <Link href="https://www.instagram.com/simple.english.online">
                <a>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.svg_images}
                  >
                    <path d="M9.94177 5.47949C7.22572 5.47949 4.97528 7.69113 4.97528 10.446C4.97528 13.2008 7.18692 15.4125 9.94177 15.4125C12.6966 15.4125 14.9083 13.162 14.9083 10.446C14.9083 7.72993 12.6578 5.47949 9.94177 5.47949ZM9.94177 13.6276C8.19574 13.6276 6.76011 12.192 6.76011 10.446C6.76011 8.69995 8.19574 7.26432 9.94177 7.26432C11.6878 7.26432 13.1234 8.69995 13.1234 10.446C13.1234 12.192 11.6878 13.6276 9.94177 13.6276Z" />
                    <path d="M15.1023 6.48823C15.7237 6.48823 16.2275 5.98446 16.2275 5.36301C16.2275 4.74157 15.7237 4.23779 15.1023 4.23779C14.4808 4.23779 13.9771 4.74157 13.9771 5.36301C13.9771 5.98446 14.4808 6.48823 15.1023 6.48823Z" />
                    <path d="M18.0123 2.45313C17.0035 1.40551 15.5679 0.862305 13.9383 0.862305H5.94532C2.56965 0.862305 0.319214 3.11275 0.319214 6.48841V14.4426C0.319214 16.111 0.862424 17.5466 1.94884 18.5942C2.99646 19.603 4.39329 20.1075 5.98412 20.1075H13.8995C15.5679 20.1075 16.9647 19.5642 17.9735 18.5942C19.0212 17.5854 19.5644 16.1498 19.5644 14.4814V6.48841C19.5644 4.85878 19.0212 3.46195 18.0123 2.45313ZM17.8571 14.4814C17.8571 15.6842 17.4303 16.6542 16.7319 17.3138C16.0335 17.9734 15.0635 18.3226 13.8995 18.3226H5.98412C4.8201 18.3226 3.85008 17.9734 3.15167 17.3138C2.45325 16.6154 2.10405 15.6454 2.10405 14.4426V6.48841C2.10405 5.32439 2.45325 4.35437 3.15167 3.65596C3.81128 2.99634 4.8201 2.64714 5.98412 2.64714H13.9771C15.1411 2.64714 16.1111 2.99634 16.8095 3.69476C17.4691 4.39317 17.8571 5.36319 17.8571 6.48841V14.4814Z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://t.me/simpleenglishonl">
                <a>
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.svg_images}
                  >
                    <path d="M20.9391 1.62171L17.7703 16.5655C17.5313 17.6201 16.9078 17.8826 16.0219 17.3858L11.1938 13.828L8.86409 16.0686C8.60628 16.3264 8.39065 16.542 7.89378 16.542L8.24065 11.6248L17.1891 3.5389C17.5782 3.19202 17.1047 2.99983 16.5844 3.34671L5.5219 10.3123L0.759403 8.82171C-0.276535 8.49827 -0.295285 7.78577 0.975028 7.2889L19.6032 0.112333C20.4657 -0.211105 21.2203 0.30452 20.9391 1.62171Z" />
                  </svg>
                </a>
              </Link>
              <button className="nav_btn " onClick={showNavBar}>
                <Image
                  src={burgerBTN}
                  alt="menu button"
                  width={34}
                  height={21}

                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
