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
      <span className="sr-only">{theme} mode is active</span>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <span className={cn(s.slider, s.round)}></span>
    </label>
  )
}
