import { Card } from 'components'
import s from './styles.module.scss'

export const Countries = ({ countries }) => {
  if (countries.length < 1) {
    return <p>Nothing matched your searched term</p>
  }

  return (
    <div className={s.grid}>
      {countries.map((country, index) => {
        return <Card key={index} country={country} />
      })}
    </div>
  )
}
