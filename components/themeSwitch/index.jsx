import s from './styles.module.scss'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsMoon, BsFillMoonFill } from 'react-icons/bs'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <button
      aria-label={`${theme} theme is active`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={s.btn}
    >
      {isDark ? <BsFillMoonFill /> : <BsMoon />}
      Dark Mode
    </button>
  )
}
