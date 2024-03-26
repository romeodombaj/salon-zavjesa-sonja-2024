import { useInView } from "react-intersection-observer";

import styles from "./GalleryImage.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryImage({ image }) {
  //const { ref, inView } = useInView({ threshold: 0.6 });
  //const [isLoaded, setLoaded] = useState(false);

  /*useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);*/

  return (
    <div className={`${styles["image-wrapper"]} `}>
      <Image
        src={image}
        className={`${styles["image"]} `}
        alt="Image."
        width={400}
        height={400}
        priority
      />
    </div>
  );
}
