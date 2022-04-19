import { Layout } from 'elements'
import { Countries, Region, Search } from 'components'
import { useState } from 'react'
import s from './styles.module.scss'

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()
  return {
    props: {
      countries: data.filter(c => c.independent),
    },
  }
}

export default function Home({ countries }) {
  const [filtered, setFiltered] = useState(null)
  const [disableSearch, setDisableSearch] = useState(false)

  const search = value => {
    setFiltered(() =>
      countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  const filter = value => {
    setFiltered(() =>
      countries.filter(c =>
        c.region.toLowerCase().includes(value.toLowerCase()),
      ),
    )
    setDisableSearch(true)
  }

  const reset = () => {
    setFiltered(null)
    setDisableSearch(false)
  }

  return (
    <Layout
      title="Countries | Homepage"
      desc="Rest countries api with color theme switcher"
    >
      <h1 className="sr-only">countries app</h1>
      <div className={s.cta}>
        <Search fn={search} disable={disableSearch} />
        <Region fn={filter} reset={reset} />
      </div>
      <Countries countries={filtered ? filtered : countries} />
    </Layout>
  )
}
