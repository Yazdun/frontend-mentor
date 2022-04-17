import { Layout } from 'elements'
import axios from 'axios'
import { Countries } from 'components'

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()
  return {
    props: {
      countries: data,
    },
  }
}

export default function Home({ countries }) {
  return (
    <Layout
      title="Countries | Homepage"
      desc="Rest countries api with color theme switcher"
    >
      <Countries countries={countries} />
    </Layout>
  )
}
