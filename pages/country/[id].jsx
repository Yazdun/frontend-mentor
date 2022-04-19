import { Borders, Details } from 'components'
import { Layout } from 'elements'
import { useRouter } from 'next/router'
import s from './styles.module.scss'
import { IoReturnUpBack } from 'react-icons/io5'
import { motion } from 'framer-motion'

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
  const router = useRouter()

  return (
    <Layout
      title={`Countries | ${name}`}
      desc={`Learn more about ${name} here`}
    >
      <h1 className="sr-only">Learn about {name}</h1>
      <div className={s.country}>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className={s.btn}
          onClick={() => router.back()}
        >
          <IoReturnUpBack />
          Back
        </motion.button>
        <div className={s.card}>
          <div className={s.flag}>
            <img src={flags.png} alt={`${name}'s flag`} className={s.img} />
            <img
              src={flags.png}
              role="presentation"
              alt=""
              className={s.over}
            />
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
