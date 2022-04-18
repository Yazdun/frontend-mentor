import s from './styles.module.scss'
import { BiChevronDown } from 'react-icons/bi'

export const Region = () => {
  return (
    <button className={s.select}>
      Filter by Region
      <BiChevronDown className={s.status} />
    </button>
  )
}
