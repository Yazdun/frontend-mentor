import { Container } from 'elements'
import Link from 'next/link'
import s from './styles.module.scss'
import { RiChatSmile2Line } from 'react-icons/ri'
import { FiUserPlus } from 'react-icons/fi'
import { Options, ThemeSwitch } from 'components'
import { useAuthContext } from 'context'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Container styles={s.container}>
        <Logo />
        <Actions />
      </Container>
    </nav>
  )
}

const Logo = () => {
  return (
    <div className={s.logo}>
      <Link href="/">
        <a aria-label="go to homepage">
          <RiChatSmile2Line />
        </a>
      </Link>
    </div>
  )
}

const Actions = () => {
  const { token } = useAuthContext()
  return (
    <div className={s.actions}>
      <ThemeSwitch />
      {token ? (
        <Options />
      ) : (
        <Link href="/signup">
          <a aria-label="create new account">
            <FiUserPlus />
          </a>
        </Link>
      )}
    </div>
  )
}
