import Image from 'next/image'
import { useState } from 'react'
import s from './styles.module.scss'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import cn from 'classnames'
import { avatars } from 'utils'

export const Avatar = ({ fn, userAvatar }) => {
  const [active, setActive] = useState(userAvatar || 1)
  return (
    <>
      <p className="sr-only">choose your avatar</p>
      <ul className={s.container}>
        {avatars.map((avatar, index) => {
          const { source, alt, key } = avatar
          const avatarIndex = index + 1
          const isActive = active === avatarIndex && s.selected
          return (
            <li key={key}>
              <button
                aria-label={`${
                  isActive ? alt + ' is your current avatar' : alt
                }`}
                className={cn(s.avatar, isActive && s.selected)}
                onClick={() => {
                  setActive(avatarIndex)
                  fn(avatarIndex)
                }}
                disabled={isActive}
              >
                <Image
                  src={source}
                  placeholder="blur"
                  alt={alt}
                  className={cn(s.img)}
                />
                {isActive && (
                  <span className={s.active}>
                    <BsFillPatchCheckFill />
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
