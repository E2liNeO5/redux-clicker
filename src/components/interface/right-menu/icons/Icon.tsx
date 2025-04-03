import styles from './Icon.module.scss'
import { useNavigate } from 'react-router'
import { LucideIcon } from 'lucide-react'

interface Props {
  type: LucideIcon
  hint: string
  path: string
}

function Icon({type: IconType, hint, path}: Props) {
  const navigate = useNavigate()
  
  const redirectHandler = () => {
    navigate(path)
  }

  return (
    <div className={styles.icon_wrapper} title={hint} onClick={redirectHandler}>
      <IconType size={36} />
    </div>
  )
}

export default Icon