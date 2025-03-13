import { CircleHelp, User } from 'lucide-react'
import Icon from './icons/Icon'

function RightMenu() {
  return (
    <div className='right_menu'>
      <Icon type={CircleHelp} hint="Помощь" keyHint="H" size='36' />
      <Icon type={User} hint="Персонаж" keyHint="C" size='36' />
    </div>
  )
}

export default RightMenu