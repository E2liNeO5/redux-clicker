import { Swords, User, Shirt  } from 'lucide-react'
import Icon from './icons/Icon'

function RightMenu() {
  return (
    <div className='right_menu'>
      <Icon type={Swords} hint='Битва' path='/map' />
      <Icon type={User} hint='Персонаж' path='/' />
      <Icon type={Shirt } hint='Кастомизация' path='/customize' /> 
    </div>
  )
}

export default RightMenu