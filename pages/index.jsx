import { Button, Container } from 'elements'
import { FaReply } from 'react-icons/fa'

export default function Home() {
  return (
    <Container>
      <Button>
        <FaReply />
        reply
      </Button>
    </Container>
  )
}
