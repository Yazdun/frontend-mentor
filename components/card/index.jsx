import Link from 'next/link'
import s from './styles.module.scss'

export const Card = ({ country }) => {
  const { name, population, region, capital, flags } = country
  return (
    <Link href={`/${name}`}>
      <a className={s.card}>
        <img className={s.img} src={flags.svg} alt={name} />
        <div className={s.text}>
          <h2 className={s.name}>{name}</h2>
          <ul className={s.list}>
            <li>
              Population : <span>{population}</span>
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
  )
}
