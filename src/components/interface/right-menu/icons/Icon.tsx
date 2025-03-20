import styles from './Icon.module.scss'

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface Props {
  type: LucideIcon
  hint: string
  keyHint: string
  size: string
}

function Icon({type: IconType, hint, keyHint, size}: Props) {
  return (
    <div className={styles.icon_wrapper} title={hint}>
      <span className={styles.icon}>
        <IconType size={size} />
      </span>
      <div className={styles.key_hint}>{keyHint}</div>
    </div>
  )
}

export default Icon