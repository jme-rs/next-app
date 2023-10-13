"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./back-link.module.scss";
import common from "@/styles/common.module.scss";

export default function BackLink() {
  const pathname = usePathname();
  const fragments = pathname.split("/");
  const backPath = fragments.slice(0, fragments.length - 1).join("/");

  return (
    <>
      {fragments.length != 2 &&
        <div className={`${common.hover} ${styles.container}`}>
          <Link href={backPath} className={styles.link}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
            <div className={styles.text}>{backPath}</div>
          </Link>
        </div>
      }
    </>
  )
}
