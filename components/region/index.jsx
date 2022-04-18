import s from './styles.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import { useState, useRef } from 'react'
import { data } from './regions'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useOnClickOutside } from 'hooks'

export const Region = () => {
  const [active, setActive] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setActive(false))

  return (
    <div className={s.wrapper}>
      <button className={s.select} onClick={() => setActive(prev => !prev)}>
        Filter by Region
        <BiChevronDown className={cn(s.status, active && s.rotate)} />
      </button>

      <motion.ul
        animate={{ scale: active ? 1 : 0 }}
        className={s.list}
        ref={ref}
      >
        {data.map((i, index) => {
          const { region } = i
          return (
            <li key={index}>
              <button className={s.item}>{region}</button>
            </li>
          )
        })}
      </motion.ul>
    </div>
  )
}
