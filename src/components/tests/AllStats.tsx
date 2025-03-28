import styles from './Tests.module.scss'

const AllStats = ({ item }: any) => {
  const showItemStats = (item: any): any => {
    return Object.keys(item).map((key: string, index: number) => {
      if(!item[key]) return <li key={index}>-</li>
      if(typeof item[key] === 'object') {
        return showItemStats(item[key])
      } else
        return <li key={index} >{key}: {item[key]}</li>
    })
  }

  return (
    <ul className={styles.all_stats}>
      { showItemStats(item) }
    </ul>
  )
}

export default AllStats