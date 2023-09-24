import Link from "next/link";
import styles from "./parts.module.scss";
import common from "@/styles/common.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export function LinkItem({
  href = "",
  title = ""
}) {
  return (
    <Link
      href={href}
      className={`${styles.linkItem} ${common.hover}`}
      prefetch={false}
    >
      {title}
    </Link>
  );
}

export function LinkItemList({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.linkItemList}>
      {children}
    </div>
  )
}

export function LinkItemFolder(
  {
    href = "",
    title = "",
    children,
  }: { href?: string, title?: string, children: React.ReactNode }
) {
  return (
    <>
      <div className={styles.linkItemFolder}>
        <div className={styles.angleIconContainer}>
          <FontAwesomeIcon icon={faAngleRight} className={styles.angleIcon} />
        </div>
        <LinkItem href={href} title={title} />
      </div>
      <LinkItemList>
        {children}
      </LinkItemList>
    </>
  );
}
