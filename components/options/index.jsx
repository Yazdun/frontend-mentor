import { CgMenuGridO } from 'react-icons/cg'
import { useState, useRef, useEffect } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import { avatars } from 'utils'
import { CgDatabase } from 'react-icons/cg'
import { FiPower } from 'react-icons/fi'
import cn from 'classnames'
import { useAuthActions, useAuthContext } from 'context'
import Animated from 'react-mount-animation'
import Router from 'next/router'
import { VscChromeClose } from 'react-icons/vsc'

const mountAnimation = `
  0% {
    transform: translateY(-20px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }`

export const Options = () => {
  const [active, setActive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeAvatar, setActiveAvatar] = useState(avatars[avatar ? avatar : 0])
  const ref = useRef()
  const { logOut } = useAuthActions()
  const { avatar } = useAuthContext()

  useEffect(() => setMounted(true), [])

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

  useEffect(() => {
    setActiveAvatar(avatars[avatar ? avatar : 0])
  }, [avatar])

  if (!mounted) return null

  return (
    <div className={s.options}>
      <button
        aria-label={`options menu ${active ? 'opened' : 'closed'}`}
        className={s.menu}
        onClick={() => setActive(prev => !prev)}
      >
        <CgMenuGridO />
      </button>

      <div className={s.wrapper} ref={ref}>
        <Animated.div
          className={s.popup}
          show={active}
          mountAnim={mountAnimation}
          time={0.2}
        >
          <div className={s.header}>
            <button
              aria-label="close menu"
              className={s.close}
              onClick={() => setActive(false)}
            >
              <VscChromeClose />
            </button>
            <Image
              src={activeAvatar.source}
              placeholder="blur"
              quality={100}
              alt={`${activeAvatar.alt} is your current avatar`}
              className={s.img}
            />
          </div>

          <ul>
            <li>
              <button
                className={s.btn}
                onClick={() => Router.push('/dashboard')}
              >
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
        </Animated.div>
      </div>
    </div>
  )
}
