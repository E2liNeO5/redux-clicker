import { ChangeEvent, useState } from 'react'
import styles from '../../styles/Testing.module.scss'
import { sqrtProgress } from '../../utils'

interface IStep {
  result: number
  count: number
}

interface IValues {
  startValue: number
  linear: number
  sqrt: number
  count: number
}

const INITIAL_VALUES: IValues = {
  startValue: 0,
  linear: 0,
  sqrt: 0,
  count: 0
}

const ProgressCalculating = () => {
  const [values, setValues] = useState<IValues>(INITIAL_VALUES)
  const [steps, setSteps] = useState<IStep[]>([])

  const onClickHandler = () => {
    console.log(values)
    if(Object.keys(values).length > 0) {
      setSteps([])
      for(let i = 1; i <= values.count; i++) {
        const ratios = {
          linear: values.linear,
          sqrt: values.sqrt
        }
        const result = sqrtProgress(values.startValue, ratios, i)
        setSteps(prev => [
          ...prev,
          { result, count: i }
        ])
      }
    }
  }

  return (
    <div className={styles.calculating_container}>
      <div className={styles.inputs}>
        <input
          type="number"
          placeholder='Начальное значение'
          onChange={(e:ChangeEvent<HTMLInputElement>) => {
            setValues(prev => ({
              ...prev, startValue: Number(e.target.value)
            }))
          }}
        />
        <input
          type="number"
          placeholder='Линейный коэфф.'
          onChange={(e:ChangeEvent<HTMLInputElement>) => {
            setValues(prev => ({
              ...prev, linear: Number(e.target.value)
            }))
          }}
        />
        <input
          type="number"
          placeholder='Квадратичный коэфф.'
          onChange={(e:ChangeEvent<HTMLInputElement>) => {
            setValues(prev => ({
              ...prev, sqrt: Number(e.target.value)
            }))
          }}
        />
        <input
          type="number"
          placeholder='Количество'
          onChange={(e:ChangeEvent<HTMLInputElement>) => {
            setValues(prev => ({
              ...prev, count: Number(e.target.value)
            }))
          }}
        />
        <button onClick={onClickHandler}>Рассчитать</button>
      </div>

      <ul className={styles.calculating_result}>
          { steps.map(step => <li key={step.count}>{`${step.count}) ${step.result}`}</li>) }
      </ul>
    </div>
  )
}

export default ProgressCalculating