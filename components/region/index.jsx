import s from './styles.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import { useState, useRef } from 'react'
import { data } from './regions'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useOnClickOutside } from 'hooks'
import { BsCircleFill } from 'react-icons/bs'

export const Region = ({ fn, reset }) => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState(null)
  const ref = useRef()
  useOnClickOutside(ref, () => setActive(false))

  return (
    <div className={s.wrapper} ref={ref}>
      <button
        aria-label={
          active
            ? 'filtering options are opened'
            : 'filtering options are closed'
        }
        className={s.select}
        onClick={() => setActive(prev => !prev)}
      >
        {text ? text : 'Filter by Region'}
        <BiChevronDown className={cn(s.status, active && s.rotate)} />
      </button>

      <motion.ul
        layout
        animate={{ scaleY: active ? 1 : 0, y: active ? 0 : -140 }}
        className={s.list}
      >
        {data.map((i, index) => {
          const { region, icon } = i
          const isActive = text === region
          return (
            <li key={index}>
              <button
                aria-label={isActive ? `${region} is active filter` : region}
                className={cn(s.item, isActive && s.active)}
                onClick={() => {
                  fn(region)
                  setText(region)
                }}
                disabled={!active}
              >
                {region} {icon}
              </button>
            </li>
          )
        })}
        <li>
          <button
            className={s.item}
            disabled={!active}
            aria-label="remove filters"
            onClick={() => {
              reset()
              setText(null)
            }}
          >
            None
            <BsCircleFill />
          </button>
        </li>
      </motion.ul>
    </div>
  )
}
