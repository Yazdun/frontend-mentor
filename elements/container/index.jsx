import s from './styles.module.scss'
import cn from 'classnames'

export const Container = ({ children, styles }) => {
  return <div className={cn(s.container, styles && styles)}>{children}</div>
}
