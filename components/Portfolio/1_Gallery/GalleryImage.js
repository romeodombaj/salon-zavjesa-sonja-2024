import styles from "./GalleryImage.module.css";
import Image from "next/image";

export default function GalleryImage({ image, setCurrentIndex, index }) {
  const onImageOpen = () => {
    setCurrentIndex(index);
  };


  return (
    <div className={`${styles["image-wrapper"]} `} onClick={onImageOpen}>
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
