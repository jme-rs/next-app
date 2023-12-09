import styles from './island.module.scss';

export default function Island({
  children,
  expansion = false
}: {
  children: React.ReactNode,
  expansion?: boolean
}) {

  return (
    <>
      <div className={`${styles.container} ${expansion ? "" : styles.enableExpansion}`}>
        {children}
      </div>
    </>
  )
}