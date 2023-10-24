import Link from "next/link";
import Image from "next/image";
import styles from "./internal-link.module.scss";
// import { branchName } from "../../next.config";

export function InternalLinkCard(
  { href,
    title,
    tag,
    date,
    imgPath
  }:
    {
      href: string,
      title?: string,
      tag?: string,
      date?: string,
      imgPath?: string
    }
) {

  // const BASE_PATH = branchName ? branchName : "";
  const BASE_PATH = process.env.BRANCH_NAME ? process.env.BRANCH_NAME : "";

  return (
    <div className={styles.container}>
      <Link href={href} prefetch={false}>
        <div className={styles.image}>
          <div className={styles.inner}>
            {imgPath ?
              <Image src={BASE_PATH + imgPath} alt="thumbnail" />
              :
              <Image src={BASE_PATH + "/next.svg"} alt="thumbnail" priority width="320" height="160" />
            }
          </div>
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
