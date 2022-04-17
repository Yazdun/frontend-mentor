import { ThemeSwitch } from 'components'
import { Container } from 'elements'
import s from './styles.module.scss'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Container sx={s.wrap}>
        <p className={s.title}>Where in the world?</p>
        <ThemeSwitch />
      </Container>
    </nav>
  )
}
