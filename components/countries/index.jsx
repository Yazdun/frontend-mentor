import { Card } from 'components'
import s from './styles.module.scss'

export const Countries = ({ countries }) => {
  return (
    <div className={s.grid}>
      {countries.map((country, index) => {
        return <Card key={index} country={country} />
      })}
    </div>
  )
}
