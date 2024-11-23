"use client";
import styles from "./ImageShow.module.css";
import Modal from "./Modal";
import { useContext, useEffect, useState } from "react";
import arrow from "@/assets/arrow.png";
import exit from "@/assets/x-background.png";
import Image from "next/image";

export default function ImageShow({ images, imageIndex, setImageIndex }) {
  const [currentIndex, setCurretIndex] = useState(imageIndex);
  const [nextIndex, setNextIndex] = useState(imageIndex);

  // IMAGE ACTIONS ??? WHAT DO?
  /*useEffect(() => {
    if (
      navCtx.showImages.images.length >= 2 &&
      navCtx.showImages.images[0] === navCtx.showImages.images[1]
    ) {
      navCtx.showImages.images = navCtx.showImages.images.shift();
    }
  }, [navCtx.showImages.images]);*/

  const prevImage = () => {
    if (currentIndex > 0) {
      setNextIndex((prevVal) => prevVal - 1);
      setTimeout(() => {
        setCurretIndex((prevVal) => prevVal - 1);
      }, [300]);
    } else {
      setNextIndex(images.length - 1);
      setTimeout(() => {
        setCurretIndex(images.length - 1);
      }, [300]);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setNextIndex((prevVal) => prevVal + 1);
      setTimeout(() => {
        setCurretIndex((prevVal) => prevVal + 1);
      }, [300]);
    } else {
      setNextIndex(0);
      setTimeout(() => {
        setCurretIndex(0);
      }, [300]);
    }
  };

  return (
    <Modal
      onClose={() => {
        setImageIndex();
      }}
    >
      <div className={styles.counter}>
        {currentIndex + 1}/{images.length}
      </div>

      <Image
        src={exit}
        alt="X"
        className={styles.exit}
        layout="intrinsic"
        height={30}
        onClick={() => {
          setImageIndex();
        }}
      />
      <main className={styles.main}>
        <Image
          src={arrow}
          alt="Arrow."
          className={`${styles[`left-arrow`]} ${styles[`arrow`]}`}
          onClick={nextIndex === currentIndex ? prevImage : () => {}}
          height={50}
          layout="intrinsic"
        />

        <div
          className={`${styles[`image-container`]} ${
            styles[currentIndex !== nextIndex && `image-transition`]
          }`}
        >
          <Image
            src={images[currentIndex]}
            alt="Image."
            className={`${styles.image}`}
            fill
          />
        </div>

        <Image
          src={arrow}
          alt="Arrow."
          className={styles[`arrow`]}
          onClick={nextIndex === currentIndex ? nextImage : () => {}}
          height={50}
          layout="intrinsic"
        />
      </main>
    </Modal>
  );
}
