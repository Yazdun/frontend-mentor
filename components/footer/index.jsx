import { Container } from 'elements'
import s from './styles.module.scss'
import cn from 'classnames'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(s.footer)}>
      <p>{year} © Built with Nextjs ❤️</p>
    </footer>
  )
}
