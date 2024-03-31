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
          className={`${styles.home} ${styles[navShrink && "home-shrink"]} ${
            styles[pathname === "/" && "active"]
          }`}
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
            pathname={pathname}
            value="zavjese"
            onClick={onNavigate}
          >
            Zavjese
          </PortfolioButton>
          <PortfolioButton
            pathname={pathname}
            navShrink={navShrink}
            value="rolice_paneli"
            onClick={onNavigate}
          >
            Rolice {!navShrink && <br></br>}i paneli
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            pathname={pathname}
            value="dekoracija"
            onClick={onNavigate}
          >
            Dekoracija
          </PortfolioButton>
          <PortfolioButton
            pathname={pathname}
            navShrink={navShrink}
            value="prateca_dekoracija"
          >
            Prateća {!navShrink && <br></br>}dekoracija
          </PortfolioButton>
        </div>
        <div className={styles.info}>
          <Link
            href="/#contact"
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            KONTAKT
          </Link>
          <Link
            href="/#location"
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            LOKACIJA
          </Link>
        </div>
      </div>
    </div>
  );
}
