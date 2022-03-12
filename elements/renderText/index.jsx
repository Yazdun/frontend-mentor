import s from './styles.module.scss'

export const RenderText = ({ text }) => {
  return (
    <>
      {text.map((line, index) => {
        return (
          <p className={s.line} key={index}>
            {line}
          </p>
        )
      })}
    </>
  )
}
