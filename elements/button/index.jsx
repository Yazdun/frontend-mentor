import cn from 'classnames'
import s from './styles.module.scss'

export const Button = ({ danger, neutral, transparent, children }) => {
  return (
    <button
      className={cn(
        s.btn,
        danger && s.danger,
        neutral && s.neutral,
        transparent && s.transparent,
      )}
    >
      {children}
    </button>
  )
}
