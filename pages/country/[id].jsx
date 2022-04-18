import { Borders, Details } from 'components'
import { Layout } from 'elements'
import Image from 'next/image'
import s from './styles.module.scss'

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()

  // map data to an array of path objects with params (id)
  const paths = data.map(country => {
    return {
      params: { id: country.alpha3Code.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch('https://restcountries.com/v2/alpha/' + id)
  const data = await res.json()

  return {
    props: { country: data },
  }
}

export default function Country({ country }) {
  const { name, flags, borders } = country

  return (
    <Layout
      title={`Countries | ${name}`}
      desc={`Learn more about ${name} here`}
      image={flags.png}
      noPadding
    >
      <div className={s.country}>
        <div className={s.card}>
          <div className={s.flag}>
            <img src={flags.png} alt={name} className={s.img} />
            <img src={flags.png} alt={name} className={s.over} />
            <div className={s.overlay}></div>
          </div>
          <div className={s.info}>
            <h2 className={s.title}>{name}</h2>
            <Details country={country} />
            <Borders borders={borders} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
