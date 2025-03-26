import { CircleHelp, Swords, User } from 'lucide-react'
import Icon from './icons/Icon'

function RightMenu() {
  return (
    <div className='right_menu'>
      <Icon type={Swords} hint='Битва' size='36' path='/map' />
      <Icon type={User} hint='Персонаж' size='36' path='/' />
      <Icon type={CircleHelp} hint='Помощь' size='36' path='/' />
    </div>
  )
}

export default RightMenu