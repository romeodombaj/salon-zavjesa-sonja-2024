"use client";

import Link from "next/link";
//import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import PortfolioButton from "./PortfolioButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // const navigate = useNavigate();

  const pathname = usePathname();

  const [navShrink, setNavShrink] = useState();

  const onNavigate = (e) => {
    const value = e.currentTarget.getAttribute("value");
    if ("/" + value !== pathname) {
      //navigate("/" + value);
      scrollToTop("instant");
    }
    scrollToTop("smooth");
  };

  const scrollToTop = (behavior) => {
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  };

  useEffect(() => {
    console.log(pathname);

    if (pathname === "/" && window.scrollY === 0) {
      setNavShrink(false);
    } else {
      setNavShrink(true);
    }

    window.onscroll = () => {
      if (pathname === "/" && window.scrollY === 0) {
        setNavShrink(false);
      } else {
        setNavShrink(true);
      }
    };
  }, [pathname]);

  return (
    <div
      className={`${styles.wrapper} ${styles[navShrink && "wrapper-shrink"]}`}
    >
      <div className={`${styles["content-section"]}`}>
        <Link
          /*onClick={onNavigate}*/
          href="/"
          value=""
          className={`${styles.home} ${styles[navShrink && "home-shrink"]}`}
        >
          NASLOVNA
        </Link>
        <div
          className={`${styles.portfolios} ${
            styles[navShrink && "portfolios-shrink"]
          }`}
        >
          <PortfolioButton
            navShrink={navShrink}
            value="zavjese"
            onClick={onNavigate}
          >
            Zavjese
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            value="rolice_paneli"
            onClick={onNavigate}
          >
            Rolice {!navShrink && <br></br>}i paneli
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            value="dekoracija"
            onClick={onNavigate}
          >
            Dekoracija
          </PortfolioButton>
          <PortfolioButton navShrink={navShrink} value="prateca_dekoracija">
            Prateća {!navShrink && <br></br>}dekoracija
          </PortfolioButton>
        </div>
        <div className={styles.info}>
          <div
            /*changed */
            onClick={onNavigate}
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            KONTAKT
          </div>
          <div
            onClick={onNavigate}
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            LOKACIJA
          </div>
        </div>
      </div>
    </div>
  );
}
