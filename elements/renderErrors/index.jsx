import s from './styles.module.scss'
import { MdNearbyError } from 'react-icons/md'

export const RenderErrors = ({ errors }) => {
  return (
    <div className={s.errors}>
      {errors.map((error, index) => {
        return (
          <p role="alert" key={index}>
            <MdNearbyError />
            {error}
          </p>
        )
      })}
    </div>
  )
}
