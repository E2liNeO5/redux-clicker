import { ComponentType, KeyboardEventHandler, MouseEventHandler, SVGProps, useCallback } from 'react'
import styles from './Icon.module.scss'
import { useNavigate } from 'react-router'
import { LucideIcon } from 'lucide-react'

interface Props {
  type: LucideIcon
  hint: string
  size?: string | number
  path: string
}

function Icon({type: IconType, hint, size, path}: Props) {
  const navigate = useNavigate()
  
  const redirectHandler = () => {
    navigate(path)
  }

  return (
    <div className={styles.icon_wrapper} title={hint} onClick={redirectHandler}>
      <IconType size={size} />
    </div>
  )
}

export default Icon