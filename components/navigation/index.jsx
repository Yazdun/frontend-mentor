import { Container } from 'elements'
import Link from 'next/link'
import s from './styles.module.scss'
import { RiChatSmile2Line } from 'react-icons/ri'
import { FiUserPlus } from 'react-icons/fi'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Container custom={s.container}>
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
        <a>
          <RiChatSmile2Line />
        </a>
      </Link>
    </div>
  )
}

const Actions = () => {
  return (
    <div>
      <Link href="/join">
        <a>
          <FiUserPlus />
        </a>
      </Link>
    </div>
  )
}
