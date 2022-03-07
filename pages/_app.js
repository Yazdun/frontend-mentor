import '../scss/main.scss'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from 'context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
