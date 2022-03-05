import { Button, Container, Formfield, Layout } from 'elements'
import { FaReply } from 'react-icons/fa'
import { useForm, FormProvider } from 'react-hook-form'
import { signupFields } from 'utils'

export default function Home() {
  const methods = useForm()

  return (
    <Layout title="Homepage">
      <Container>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data => {
              console.log(data)
            })}
          >
            {signupFields.map(field => {
              return <Formfield {...field} key={field.key} />
            })}
            <Button>sign up</Button>
          </form>
        </FormProvider>
      </Container>
    </Layout>
  )
}
