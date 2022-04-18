import s from './styles.module.scss'
import { MdSearch } from 'react-icons/md'

export const Search = ({ fn }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <MdSearch />
      </div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className={s.input}
        type="text"
        placeholder="Search for a country"
        onChange={e => fn(e.target.value)}
      />
    </div>
  )
}
