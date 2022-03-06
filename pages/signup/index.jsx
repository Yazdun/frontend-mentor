import { Button, Container, Formfield, Layout } from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { username, password } from 'utils'
import { useRef } from 'react'
import s from './styles.module.scss'
import { Avatar } from 'components'
import { useState } from 'react'

export default function SignUp() {
  const methods = useForm()
  const [avatar, setAvatar] = useState(1)

  return (
    <Layout title="Sign Up">
      <Container>
        <h1 className="sr-only">join comments app</h1>
        <Avatar userAvatar={avatar} fn={setAvatar} />
        <p className="sr-only">fill your info</p>
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
