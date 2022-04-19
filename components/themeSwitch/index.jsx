import s from './styles.module.scss'
import { useTheme } from 'next-themes'
import { BsMoon, BsFillMoonFill } from 'react-icons/bs'
import { useMount } from 'hooks'

export const ThemeSwitch = () => {
  const mounted = useMount()
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

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
