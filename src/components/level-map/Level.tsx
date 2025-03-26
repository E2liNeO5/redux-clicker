import { useNavigate } from 'react-router'
import styles from './Level.module.scss'
import useActions from '../../hooks/useActions'
import useGetLevel from '../../hooks/level/useGetLevel'

interface Props {
  levelNumber: number
}

const Level = ({ levelNumber }: Props) => {
  const navigate = useNavigate()
  const { setLevel } = useActions()

  const redirectHandler = () => {
    setLevel(Number(levelNumber))
    navigate(`/level/${levelNumber}`)
  }

  return (
    <div className={styles.level_wrapper} onClick={redirectHandler}>
      <span className={styles.level_number}>{levelNumber}</span>
    </div>
  )
}

export default Level