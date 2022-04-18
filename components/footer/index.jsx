import { Container } from 'elements'
import s from './styles.module.scss'
import cn from 'classnames'

export const Footer = ({ hideFooter }) => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(s.footer, hideFooter && s.hide)}>
      <p>
        {year} © Built with Nextjs ❤️ ~{' '}
        <a href="https://yazdun.com/" target="_blank" rel="noreferrer">
          Yazdun
        </a>
      </p>
    </footer>
  )
}
