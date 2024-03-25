//import { useInView } from "react-intersection-observer";

import styles from "./GalleryImage.module.css";

export default function GalleryImage({ image, isMobile = false }) {
  // const { ref, inView } = useInView({ threshold: 0.6 });

  /*useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);*/

  return (
    <div
      className={`${styles["image-wrapper"]} ${styles["load-animation"]}`}
      //ref={ref}
    >
      <img
        src={image}
        className={`${styles["image"]} ${styles[isMobile && "mobile"]}`}
        alt="Image."
        fill
      />
    </div>
  );
}
