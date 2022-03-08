import { Navigation } from 'components'
import Head from 'next/head'
import s from './styles.module.scss'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Frontend mentor Interactive comments section, built with nextjs"
        />
        <title>Comments App | {title}</title>
      </Head>
      <Navigation />
      <main id="main" className={s.main}>
        {children}
      </main>
    </>
  )
}
