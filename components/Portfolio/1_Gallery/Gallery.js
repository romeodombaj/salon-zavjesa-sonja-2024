"use client";

import useIsMobile from "@/components/hooks/use-is-mobile";
import styles from "./Gallery.module.css";
import GalleryImage from "./GalleryImage";
import ImageShow from "@/components/UI/ImageShow";
import { useEffect, useState } from "react";

export default function Gallery({ slug, values }) {
  const length = values.num_of_images;
  const { isMobile } = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState();

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
      imageList1.push({ image, i });
    } else if (i >= length / 4 && i < (length / 4) * 2) {
      imageList2.push({ image, i });
    } else if (i >= (length / 4) * 2 && i < (length / 4) * 3) {
      imageList3.push({ image, i });
    } else if (i >= (length / 4) * 3) {
      imageList4.push({ image, i });
    }

    if (i < length / 2) {
      imageList5.push({ image, i });
    } else if (i >= length / 2) {
      imageList6.push({ image, i });
    }
  });

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <>
      {currentIndex !== undefined && (
        <ImageShow
          images={imageList}
          imageIndex={currentIndex}
          setImageIndex={setCurrentIndex}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles[`background-title`]}>{values.name}</div>

        {imageList && (
          <div className={styles.grid}>
            {!isMobile ? (
              <>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList1.length > 0 &&
                    imageList1.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList2.length > 0 &&
                    imageList2.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    })}
                </div>
                <div className={`${styles.column} ${styles["column3"]}`}>
                  {imageList3.length > 0 &&
                    imageList3.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    })}
                </div>
                <div className={`${styles.column} ${styles["column4"]}`}>
                  {imageList4.length > 0 &&
                    imageList4.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    })}
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList5.length > 0 &&
                    imageList5.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList6.length > 0 &&
                    imageList6.map((image) => {
                      return (
                        <GalleryImage
                          key={image.i}
                          index={image.i}
                          image={image.image}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
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
