import { Button, Container, Layout } from 'elements'
import { FaReply } from 'react-icons/fa'

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Button>
          <FaReply />
          reply
        </Button>
      </Container>
    </Layout>
  )
}
