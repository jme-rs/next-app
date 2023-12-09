import styles from "./page-header.module.scss"

export default function PageHeader({
  title, description
}: {
  title: string, description?: string,
}) {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.title}>{title}</div>
        {description &&
          <div className={styles.description}>{description}</div>
        }
      </div>
      {/* <div className={styles.devbar} /> */}
    </>
  )
}