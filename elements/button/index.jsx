import cn from 'classnames'
import s from './styles.module.scss'
import { BiLoaderCircle } from 'react-icons/bi'

export const Button = ({
  danger,
  neutral,
  transparent,
  styles,
  disabled,
  loading,
  children,
  onClick,
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
      onClick={onClick && onClick}
    >
      {loading ? (
        <>
          <BiLoaderCircle className={s.loader} />
          loading
        </>
      ) : (
        children
      )}
    </button>
  )
}
