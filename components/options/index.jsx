import { CgMenuGridO } from 'react-icons/cg'
import { useState, useRef, useEffect } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import { avatars } from 'utils'
import { CgDatabase } from 'react-icons/cg'
import { FiPower } from 'react-icons/fi'
import cn from 'classnames'
import { useAuthActions } from 'context'

export const Options = () => {
  const [active, setActive] = useState(false)
  const ref = useRef()
  const { logOut } = useAuthActions()
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (active && ref.current && !ref.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [active])
  return (
    <div className={s.options}>
      <button className={s.menu} onClick={() => setActive(prev => !prev)}>
        <CgMenuGridO />
      </button>
      {active && (
        <div className={s.wrapper} ref={ref}>
          <div className={s.popup}>
            <Image
              src={avatars[5].source}
              placeholder="blur"
              quality={100}
              alt={avatars[1].alt}
              className={s.img}
            />

            <ul>
              <li>
                <button className={s.btn}>
                  dashboard
                  <CgDatabase />
                </button>
              </li>
              <li>
                <button className={cn(s.logout, s.btn)} onClick={logOut}>
                  logout
                  <FiPower />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
