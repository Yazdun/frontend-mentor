import s from './styles.module.scss'
import cn from 'classnames'

export const Container = ({ children, custom }) => {
  return <div className={cn(s.container, custom && custom)}>{children}</div>
}
