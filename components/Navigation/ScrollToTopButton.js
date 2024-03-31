"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import arrowUp from "@/assets/arrow-up.png";
import Image from "next/image";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScrollingPosition = () => {
    window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", checkScrollingPosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", checkScrollingPosition);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <main className={styles.main} onClick={scrollToTop}>
          <Image src={arrowUp} alt="Arrow." fill priority />
        </main>
      )}
    </>
  );
}
