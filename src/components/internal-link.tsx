import Link from "next/link";
import Image from "next/image";
import styles from "./internal-link.module.scss";

export function InternalLinkCard(
  { href, title, date, imgPath = "" }:
    { href: string, title: string, date: string, imgPath?: string }
) {
  return (
    <div className={styles.container}>
      <Link href={href} prefetch={false}>
        <div className={styles.image}>

          {imgPath == "" ?
            <Image src="/next.svg" alt="thumbnail" width="320" height="160" />
            :
            <Image src={imgPath} alt="thumbnail" />
          }
        </div>

        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.inner}>{title}</div>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </Link>
    </div>
  )
}

export function InternalLinkContainer(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  )
}
