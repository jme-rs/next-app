import Link from "next/link";
import styles from "./internal-link.module.scss";

export function InternalLinkCard(
  { href, title, date }: { href: string, title: string, date: string }
) {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <div className={styles.title}>
            <p className={styles.inner}>{title}</p>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </Link>
  )
}

export function InternalLinkContainer(
  { href, children }: { href: string, children: React.ReactNode }
) {
  return (
    <div>

    </div>
  )
}
