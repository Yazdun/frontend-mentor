import s from './styles.module.scss'
import { MdSearch } from 'react-icons/md'

export const Search = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <MdSearch />
      </div>
      <input
        className={s.input}
        type="text"
        placeholder="Search for a country"
      />
    </div>
  )
}
