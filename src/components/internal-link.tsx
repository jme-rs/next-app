import Link from "next/link";
import Image from "next/image";
import styles from "./internal-link.module.scss";
import { Tag } from "./tag";
import Date from "./date";
import { PostMetadata } from "@/types/post"

export function InternalLinkCard(props: PostMetadata & { href: string, imgPath?: string }) {
  return (
    <div className={styles.container}>
      <Link href={props.href} prefetch={false}>
        <div className={styles.image}>
          <div className={styles.inner}>
            {props.imgPath
              ? <Image src={props.imgPath} alt="thumbnail" />
              : <Image src={"/images/next.svg"} alt="thumbnail" priority width="320" height="160" />
            }
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.inner}>{props.title}</div>
          </div>
          <div className={styles.tagContainer}>
            <Tag tags={props.tags} />
          </div>
          <div className={styles.dateContainer}>
            <Date
              post={props.post}
              update={props.update}
            />
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
