import { Container, Layout } from 'elements'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Homepage">
      <Container>
        <h1>Homepage</h1>
        <Link href="/login">
          <a>login</a>
        </Link>
      </Container>
    </Layout>
  )
}
