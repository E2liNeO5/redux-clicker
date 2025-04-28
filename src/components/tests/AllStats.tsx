import styles from './Testing.module.scss'

const AllStats = ({ item }: any) => {
  const showItemStats = (item: any, padding?: number): any => {
    return Object.keys(item).map((key: string, index: number) => {
      if(!item[key]) return <li key={index}>-</li>
      if(typeof item[key] === 'object') {
        return (
          <ul key={index}>{key}: {'{'}{showItemStats(item[key], 10)}{'}'}</ul>
        )
      } else
        return <li key={index} style={{paddingLeft: `${padding}px`}}>{key}: {item[key]}</li>
    })
  }

  return (
    <ul className={styles.all_stats}>
      { showItemStats(item) }
    </ul>
  )
}

export default AllStats