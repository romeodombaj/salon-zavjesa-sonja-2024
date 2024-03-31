"use client";

import styles from "./Gallery.module.css";
import GalleryImage from "./GalleryImage";
import { useState, useEffect } from "react";

export default function Gallery({ slug, length }) {
  const [isMobile, setIsMobile] = useState();

  const imageList = Array.from(
    { length: length },
    (_, i) => `/images/webImages/${slug}/${slug}${i + 1}.jpg`
  );

  let imageList1 = [];
  let imageList2 = [];
  let imageList3 = [];
  let imageList4 = [];
  let imageList5 = [];
  let imageList6 = [];

  imageList.map((image, i) => {
    if (i < length / 4) {
      imageList1.push(image);
    } else if (i >= length / 4 && i < (length / 4) * 2) {
      imageList2.push(image);
    } else if (i >= (length / 4) * 2 && i < (length / 4) * 3) {
      imageList3.push(image);
    } else if (i >= (length / 4) * 3) {
      imageList4.push(image);
    }

    if (i < length / 2) {
      imageList5.push(image);
    } else if (i >= length / 2) {
      imageList6.push(image);
    }
  });

  useEffect(() => {
    const changeMobileView = () => {
      if (window.innerWidth <= 720 && isMobile === false) {
        setIsMobile(true);
      } else if (window.innerWidth > 720 && isMobile === true) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", changeMobileView);

    return () => {
      window.removeEventListener("resize", changeMobileView);
    };
  });

  // new

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles[`background-title`]}>
          {slug === "zavjese" && "Zavjese"}
          {slug === "dekoracija" && "Dekoracija"}
          {slug === "prateca_dekoracija" && "Prateća dekoracija"}
          {slug === "rolice_paneli" && "Rolice i paneli"}
        </div>

        {imageList && (
          <div className={styles.grid}>
            {!isMobile ? (
              <>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList1.length > 0 &&
                    imageList1.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList2.length > 0 &&
                    imageList2.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column3"]}`}>
                  {imageList3.length > 0 &&
                    imageList3.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column4"]}`}>
                  {imageList4.length > 0 &&
                    imageList4.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList5.length > 0 &&
                    imageList5.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList6.length > 0 &&
                    imageList6.map((image, i) => {
                      return <GalleryImage key={i} image={image} />;
                    })}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
