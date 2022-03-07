import s from './styles.module.scss'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <label className={s.switch}>
      <input
        aria-label={`${theme} theme is active`}
        type="checkbox"
        checked={
          theme === 'dark' ||
          (theme === 'system' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <span className={cn(s.slider, s.round)}></span>
    </label>
  )
}
