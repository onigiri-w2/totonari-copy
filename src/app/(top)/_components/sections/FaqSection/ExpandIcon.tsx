import styles from './styles.module.css'
const ExpandIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer stroke-primary"
    >
      <line
        className={styles.expandY}
        x1="10"
        y1="0"
        x2="10"
        y2="20"
        strokeWidth="2"
      />
      <line x1="0" y1="10" x2="20" y2="10" strokeWidth="2" />
    </svg>
  )
}

export default ExpandIcon
