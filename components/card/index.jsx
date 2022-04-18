import Link from 'next/link'
import s from './styles.module.scss'
import { motion } from 'framer-motion'

export const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country
  return (
    <motion.div
      className={s.card}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Link href={`/country/${alpha3Code}`}>
        <a>
          <img className={s.img} src={flags.png} alt={name} />
          <div className={s.text}>
            <h2 className={s.name}>{name}</h2>
            <ul className={s.list}>
              <li>
                Population : <span>{population.toLocaleString('en-US')}</span>
              </li>
              <li>
                Region : <span>{region}</span>
              </li>
              <li>
                capital : <span>{capital}</span>
              </li>
            </ul>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
