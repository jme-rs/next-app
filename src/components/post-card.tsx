import Link from "next/link";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import styles from "./post-card.module.scss";
import { Tag } from "./tag";
import Date from "./date";
import { PostMetadata } from "@/types/post"
import nextSvgImg from "@/assets/images/next.svg";

export function PostCard(props: PostMetadata & { href: string, imgPath?: string }) {
  return (
    <div className={styles.container}>
      <Link href={props.href} prefetch={false}>
        <div className={styles.imageContainer}>
          {props.imgPath
            ? <ExportedImage
              src={props.imgPath}
              alt="thumbnail"
              fill
            />
            : <ExportedImage
              src={nextSvgImg}
              alt="thumbnail"
              style={{ objectFit: "contain" }}
            />
          }
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            {props.title}
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

export function PostCardContainer(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  )
}
