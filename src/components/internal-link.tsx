import Link from "next/link";
import Image from "next/image";
import styles from "./internal-link.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export function InternalLinkCard(
  {
    href,
    title,
    tag,
    date,
    imgPath,
  }: {
    href: string,
    title?: string,
    tag?: string,
    date?: string,
    imgPath?: string,
  }
) {
  return (
    <div className={styles.container}>
      <Link href={href} prefetch={false}>
        <div className={styles.image}>
          <div className={styles.inner}>
            {imgPath ?
              <Image src={imgPath} alt="thumbnail" />
              :
              <Image src={"/images/next.svg"} alt="thumbnail" priority width="320" height="160" />
            }
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.inner}>{title}</div>
          </div>
          <div className={styles.dateContainer}>
            <AccessTimeIcon className={styles.icon} />
            <div className={styles.date}>{date}</div>
          </div>
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
