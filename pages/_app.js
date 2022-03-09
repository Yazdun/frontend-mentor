import '../scss/main.scss'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from 'context'
import { StatusErrorProvider } from 'context'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StatusErrorProvider>
          <Component {...pageProps} />
        </StatusErrorProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
