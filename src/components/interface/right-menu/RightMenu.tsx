import { CircleHelp, Swords, User } from 'lucide-react'
import Icon from './icons/Icon'

function RightMenu() {
  return (
    <div className='right_menu'>
      <Icon type={Swords} hint='Битва' path='/map' />
      <Icon type={User} hint='Персонаж' path='/' />
      <Icon type={CircleHelp} hint='Помощь' path='/' />
    </div>
  )
}

export default RightMenu