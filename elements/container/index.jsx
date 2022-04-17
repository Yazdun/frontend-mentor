import s from './styles.module.scss'
import cn from 'classnames'

export const Container = ({ children, noPadding, sx }) => {
  return (
    <div className={cn(s.container, noPadding && s.noPadding, sx)}>
      {children}
    </div>
  )
}
