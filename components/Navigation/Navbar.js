"use client";

import Link from "next/link";
//import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import PortfolioButton from "./PortfolioButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import hamburgerIcon from "@/assets/hamburger-icon.png";
import phoneIcon from "@/assets/phone-icon.png";
import locationIcon from "@/assets/location-icon.png";
import MobileMenu from "./MobileMenu";
import useIsMobile from "../hooks/use-is-mobile";

export default function Navbar() {
  // const navigate = useNavigate();

  const pathname = usePathname();
  const { isMobile } = useIsMobile();

  const [navShrink, setNavShrink] = useState();
  const [isNavigating, setIsNavigating] = useState(false);

  const onMenuOpenHandler = () => {
    !isNavigating && setIsNavigating(true);
  };

  const onMenuCloseHandler = () => {
    setIsNavigating(false);
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
      className={`${styles.wrapper} ${
        (navShrink || isMobile) && styles["wrapper-shrink"]
      }`}
    >
      {isNavigating && (
        <MobileMenu
          pathname={pathname}
          onMenuCloseHandler={onMenuCloseHandler}
        />
      )}
      <div className={`${styles["content-section"]}`}>
        <Link
          /*onClick={onNavigate}*/
          href="/"
          value=""
          className={`${styles.home} ${
            (navShrink || isMobile) && styles["home-shrink"]
          } ${styles[pathname === "/" && "active"]}`}
        >
          NASLOVNA
        </Link>
        <div
          className={`${styles.portfolios} ${
            (navShrink || isMobile) && styles["portfolios-shrink"]
          }`}
        >
          <PortfolioButton
            shrink={navShrink || isMobile}
            pathname={pathname}
            value="zavjese"
          >
            Zavjese
          </PortfolioButton>
          <PortfolioButton
            pathname={pathname}
            shrink={navShrink || isMobile}
            value="rolice_paneli"
          >
            Rolice i paneli
          </PortfolioButton>
          <PortfolioButton
            shrink={navShrink || isMobile}
            pathname={pathname}
            value="dekoracija"
          >
            Dekoracija
          </PortfolioButton>
          <PortfolioButton
            pathname={pathname}
            shrink={navShrink || isMobile}
            value="prateca_dekoracija"
          >
            Prateća dekoracija
          </PortfolioButton>
        </div>
        <div className={styles.info}>
          <Link
            href="/#contact"
            className={`${styles["info-button"]} ${
              (navShrink || isMobile) && styles["info-button-shrink"]
            }`}
          >
            <Image
              src={phoneIcon}
              alt="Phone."
              className={styles[`info-icon`]}
            />
            <div className={styles[`info-text`]}>099-595-1938</div>
          </Link>

          <Link
            href="/#location"
            className={`${styles["info-button"]} ${
              (navShrink || isMobile) && styles["info-button-shrink"]
            }`}
          >
            <Image
              src={locationIcon}
              alt="Location."
              className={styles[`info-icon`]}
            />
          </Link>
          <div
            className={`${styles["info-button"]} ${styles["hamburger"]} ${
              (navShrink || isMobile) && styles["info-button-shrink"]
            }`}
          >
            <Image
              src={hamburgerIcon}
              alt="Menu."
              className={styles[`info-icon`]}
              onClick={onMenuOpenHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
