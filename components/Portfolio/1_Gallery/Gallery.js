import styles from "./Gallery.module.css";
import GalleryImage from "./GalleryImage";

export default function Gallery({ slug, length }) {
  const isMobile = false;

  const imageList = Array.from(
    { length: length },
    (_, i) => `/images/webImages/${slug}/${slug}${i + 1}.jpg`
  );

  /*const [imageList, setImageList] = useState();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 720 ? false : true
  );

  const setImageListHandler = (images) => {
    setImageList(images.keys().map((image) => images(image)));
  };*/

  /*useEffect(() => {
    const changeMobileView = () => {
      if (window.innerWidth <= 720 && isMobile === false) {
        setIsMobile(true);
        console.log("setting to mobile");
      } else if (window.innerWidth > 720 && isMobile === true) {
        console.log("setting to desktop");
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", changeMobileView);

    return () => {
      window.removeEventListener("resize", changeMobileView);
    };
  });*/

  /*useEffect(() => {
    const path = window.location.hash.slice(2);

    setImageList();

    setTimeout(() => {
      switch (path) {
        case "zavjese":
          setImageListHandler(zavjese);
          break;
        case "rolice_paneli":
          setImageListHandler(rolice_paneli);
          break;
        case "dekoracija":
          setImageListHandler(dekoracija);
          break;
        case "prateca_dekoracija":
          setImageListHandler(prateca_dekoracija);
          break;
      }
    }, [1]);
  }, [useParams()]);*/

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles[`background-title`]}>{slug}</div>

        {imageList && (
          <div className={styles.grid2}>
            {imageList.length > 0 &&
              imageList.map((image, i) => {
                if (i % 3 === 0) {
                  return (
                    <GalleryImage
                      key={i}
                      image={image}
                      className={styles[`column3`]}
                    />
                  );
                } else if (i % 2 === 0) {
                  return (
                    <GalleryImage
                      key={i}
                      image={image}
                      className={styles[`column2`]}
                    />
                  );
                } else {
                  return (
                    <GalleryImage
                      key={i}
                      image={image}
                      className={styles[`column1`]}
                    />
                  );
                }
              })}
          </div>
        )}

        {/*
        {imageList && (
          <div className={styles.grid}>
            {!isMobile ? (
              <Fragment>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList.length > 0 &&
                    imageList.map((image, i) => {
                      if (i < imageList.length / 3)
                        return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList &&
                    imageList.length > 0 &&
                    imageList.map((image, i) => {
                      if (
                        i >= imageList.length / 3 &&
                        i <= (imageList.length / 3) * 2
                      )
                        return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column3"]}`}>
                  {imageList &&
                    imageList.length > 0 &&
                    imageList.map((image, i) => {
                      if (i > (imageList.length / 3) * 2)
                        return <GalleryImage key={i} image={image} />;
                    })}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className={`${styles.column} ${styles["column1"]}`}>
                  {imageList.length > 0 &&
                    imageList.map((image, i) => {
                      if (i < imageList.length / 2)
                        return <GalleryImage key={i} image={image} />;
                    })}
                </div>
                <div className={`${styles.column} ${styles["column2"]}`}>
                  {imageList.length > 0 &&
                    imageList.map((image, i) => {
                      if (i >= imageList.length / 2)
                        return <GalleryImage key={i} image={image} />;
                    })}
                </div>
              </Fragment>
            )}
          </div>
        )}
         */}
      </div>
    </>
  );
}
