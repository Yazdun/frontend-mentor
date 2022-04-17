import { ThemeSwitch } from 'components'
import { Container } from 'elements'
import Link from 'next/link'
import s from './styles.module.scss'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Container sx={s.wrap}>
        <Link href="/">
          <a className={s.title}>Where in the world?</a>
        </Link>
        <ThemeSwitch />
      </Container>
    </nav>
  )
}
