import { Button, Container, Formfield, Layout } from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { signupFields } from 'utils'

export default function Home() {
  return (
    <Layout title="Homepage">
      <Container>
        <h1>Homepage</h1>
        <Button>test</Button>
        <Button danger>test</Button>
        <Button neutral>test</Button>
        <Button transparent danger>
          test
        </Button>
      </Container>
    </Layout>
  )
}
