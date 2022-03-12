import { Navigation } from 'components'
import Head from 'next/head'
import s from './styles.module.scss'

export const Layout = ({ children, title }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Frontend mentor Interactive comments section, built with nextjs"
        />
        <title>Comments App | {title}</title>
      </Head>
      <a className={s.skip} href="#main">
        Skip to main content
      </a>
      <Navigation />
      <main id="main" className={s.main}>
        {children}
      </main>
    </html>
  )
}
