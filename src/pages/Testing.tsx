import AllStats from '../components/tests/AllStats'
import ProgressCalculating from '../components/tests/ProgressCalculating'
import ShortValueTest from '../components/tests/ShortValueTest'
import useGetPlayer from '../hooks/player/useGetPlayer'
import styles from '../components/tests/Testing.module.scss'

const Testing = () => {
  const player = useGetPlayer()

  const gameReset = () => {
    localStorage.clear()
    location.reload()
  }

  return (
    <div className={styles.testing_container}>
      <AllStats item={player} />
      <button onClick={gameReset}>Сброс игры</button>
      <ProgressCalculating />
      <ShortValueTest />
    </div>
  )
}

export default Testing