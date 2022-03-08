import '../scss/main.scss'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from 'context'
import { StatusErrorProvider } from 'context'

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
