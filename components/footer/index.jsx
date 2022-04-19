import s from './styles.module.scss'
import cn from 'classnames'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(s.footer)}>
      <p>
        {year} ©{' '}
        <a href="https://yazdun.com/" target="_blank" rel="noreferrer">
          Yazdun.com
        </a>
      </p>
    </footer>
  )
}
