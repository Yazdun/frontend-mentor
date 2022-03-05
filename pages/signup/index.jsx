import { Button, Container, Formfield, Layout } from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { username, password } from 'utils'
import { useRef } from 'react'
import s from './styles.module.scss'

export default function SignUp() {
  const methods = useForm()

  return (
    <Layout title="Sign Up">
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => console.log(data))}>
            <Formfield {...username} />
            <Formfield {...password} />
            <Button styles={s.btn}>sign up</Button>
          </form>
        </FormProvider>
      </Container>
    </Layout>
  )
}
