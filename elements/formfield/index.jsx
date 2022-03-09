import { useFormContext } from 'react-hook-form'
import { filterError, isError } from 'utils'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import cn from 'classnames'
import s from './styles.module.scss'

export const Formfield = ({
  type,
  id,
  name,
  validation,
  label,
  placeholder,
  multiline,
  styles,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const e = filterError({ errors, name })
  const isErr = isError(e)

  return (
    <div className={cn(s.field, isErr && s.fieldErr, styles && styles)}>
      {multiline ? (
        <textarea
          className={cn(s.textfield, s.textarea)}
          type={type}
          name={name}
          placeholder={placeholder}
          aria-placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          className={cn(s.textfield)}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      )}

      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      {isErr && (
        <div className={s.err}>
          <BsFillExclamationCircleFill />
          <p role="alert">{e.error.message}</p>
        </div>
      )}
    </div>
  )
}
