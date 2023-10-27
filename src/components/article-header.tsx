import styles from "./article-header.module.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ArticleHeader({
  title = "", tags = [], date = "",
}: {
  title: string, tags: string[], date: string,
}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <AccessTimeIcon className={styles.icon} />
        <div className={styles.text}>{date}</div>
      </div>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <div className={styles.tag}>#{tag}</div>
        ))}
      </div>
    </div>
  )
}