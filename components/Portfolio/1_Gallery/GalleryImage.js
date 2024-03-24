//import { useInView } from "react-intersection-observer";

import styles from "./GalleryImage.module.css";

export default function GalleryImage(props) {
  const image = props.image;

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
        className={`${styles["image"]}`}
        alt="Image."
        fill
      />
    </div>
  );
}
