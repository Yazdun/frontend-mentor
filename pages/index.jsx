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

  const handleFilter = value => {
    setFiltered(() =>
      countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  return (
    <Layout
      title="Countries | Homepage"
      desc="Rest countries api with color theme switcher"
    >
      <div className={s.cta}>
        <Search fn={handleFilter} />
        <Region />
      </div>
      <Countries countries={filtered ? filtered : countries} />
    </Layout>
  )
}
