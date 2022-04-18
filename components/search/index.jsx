import s from './styles.module.scss'
import { MdSearch } from 'react-icons/md'
import cn from 'classnames'
import { useRef, useEffect } from 'react'

export const Search = ({ fn, disable }) => {
  const ref = useRef()

  useEffect(() => {
    ref.current.value = ''
  }, [disable])

  return (
    <div className={cn(s.wrapper, disable && s.disable)}>
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
        disabled={disable}
        ref={ref}
      />
    </div>
  )
}
