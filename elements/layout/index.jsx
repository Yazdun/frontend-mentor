import { Navigation } from 'components'
import { NextSeo } from 'next-seo'
import s from './styles.module.scss'
import cn from 'classnames'

export const Layout = ({ children, title, desc, image, url, noPadding }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
        openGraph={{
          url: `https://example.com${url}`,
          title: title,
          description: desc,
          locale: 'en_us',
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Countries',
        }}
        twitter={{
          handle: '@Yazdun',
          site: '@Yazdun',
          cardType: 'summary_large_image',
        }}
      />
      <a className={s.skip} href="#main">
        Skip to main content
      </a>
      <Navigation />
      <main id="main" className={cn(s.main, noPadding && s.noPadding)}>
        {children}
      </main>
    </>
  )
}
