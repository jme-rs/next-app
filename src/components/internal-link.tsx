import Link from "next/link";
import styles from "./internal-link.module.scss";

export function InternalLinkCard(
  { href, title, date }: { href: string, title: string, date: string }
) {
  return (
    <div className={styles.container}>
      <Link href={href} prefetch={false}>
        <div className={styles.image}></div>
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
