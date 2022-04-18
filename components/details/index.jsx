import s from './styles.module.scss'

export const Details = ({ country }) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country
  return (
    <div className={s.lists}>
      <ul className={s.info}>
        <li>
          native name: <span>{nativeName}</span>
        </li>
        <li>
          population: <span>{population.toLocaleString('en-US')}</span>
        </li>
        <li>
          region: <span>{region}</span>
        </li>
        <li>
          subregion: <span>{subregion}</span>
        </li>
        <li>
          capital: <span>{capital}</span>
        </li>
      </ul>
      <ul className={s.info}>
        <li>
          top level domain: <span className={s.domain}>{topLevelDomain}</span>
        </li>
        <li className={s.arr}>
          currencies:{' '}
          {currencies.map((cur, index) => (
            <span key={index}>{cur.name}</span>
          ))}
        </li>
        <li className={s.arr}>
          languages:
          {languages.map((lang, index) => (
            <span key={index}> {lang.name}</span>
          ))}
        </li>
      </ul>
    </div>
  )
}
