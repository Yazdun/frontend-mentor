import s from './styles.module.scss'

export const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>
}
