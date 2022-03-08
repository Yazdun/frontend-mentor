import { Container } from 'elements'
import s from './styles.module.scss'

export const HttpError = ({ icon, title, desc }) => {
  return (
    <Container styles={s.error}>
      {icon}
      <h1>{title}</h1>
      <p>{desc}</p>
    </Container>
  )
}
