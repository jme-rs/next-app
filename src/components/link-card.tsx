import { getPageMeta } from "@/utils/page-info";
import styles from "./link-card.module.scss";
import Link from "next/link";

export default async function LinkCard({ href }: { href: string }) {

  const { title, description, imgURL } = await getPageMeta(href);

  return (
    <Link className={styles.container} href={href}>
      <div className={styles.innerContainer}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.url}>{href}</div>
      </div>
      <img src={imgURL} alt="" className={styles.imgContainer} />
    </Link>
  )
}
