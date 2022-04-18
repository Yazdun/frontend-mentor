import Link from 'next/link'
import s from './styles.module.scss'
import { motion } from 'framer-motion'

export const Borders = ({ borders }) => {
  if (!borders || borders.length < 1) {
    return (
      <div className={s.container}>
        <p className={s.title}>
          Border Countries: <span className={s.no}>No country</span>
        </p>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <p className={s.title}>Border Countries:</p>
      <div className={s.borders}>
        {borders.map(b => {
          return (
            <Link href={`/country/${b}`} key={b}>
              <a className={s.border}>{b}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
