import cn from 'classnames'
import s from './styles.module.scss'

export const Button = ({
  danger,
  neutral,
  transparent,
  styles,
  disabled,
  loading,
  children,
}) => {
  return (
    <button
      className={cn(
        s.btn,
        danger && s.danger,
        neutral && s.neutral,
        transparent && s.transparent,
        styles && styles,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
