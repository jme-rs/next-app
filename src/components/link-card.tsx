import styles from "./link-card.module.scss";
import { getDomFromURL, getFullIconURL } from "@/utils/fetch";
import Image from "next/image";

export async function LinkCard({ href }: { href: string }) {
  const dom = await getDomFromURL(href);
  const title = dom.querySelector("title")?.textContent;
  const description = dom.querySelector("meta[name='description']")?.getAttribute("content");
  const icon = getFullIconURL(href, dom);

  return (
    <a className={styles.container} href={href}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.link}>{href}</div>
      </div>
      {/* <Image
        src={icon || "/favicon.ico"}
        height={100}
        width={100}
        alt="icon"
      /> */}
    </a>
  )
}
