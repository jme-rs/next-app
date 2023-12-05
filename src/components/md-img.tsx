import Image from "next/image";
import styles from "./md-img.module.scss";

export default function MdImg({ src, alt }: { src: string, alt: string }) {
  console.log("src", src);

  return (
    <div className={styles.mdImg}>
      <Image
        src={src}
        alt={alt}
        fill
        objectFit="contain"
      />
    </div>
  );
}