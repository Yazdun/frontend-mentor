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
  const ref = useRef()
  const { logOut } = useAuthActions()
  const { avatar } = useAuthContext()
  const [mounted, setMounted] = useState(false)

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
          <Image
            src={avatars[avatar ? avatar : 0].source}
            placeholder="blur"
            quality={100}
            alt={avatars[avatar ? avatar : 0].alt}
            className={s.img}
          />

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
