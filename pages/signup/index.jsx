import { Button, Container, Formfield, Layout } from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { username, password, isError } from 'utils'
import s from './styles.module.scss'
import { Avatar, Loading } from 'components'
import { useState } from 'react'
import { usePost } from 'hooks'
import { SIGNUP } from 'services'
import { useAuthActions, useAuthContext } from 'context'
import Router from 'next/router'
import { useEffect } from 'react'

export default function SignUp() {
  const methods = useForm()
  const { setToken } = useAuthActions()
  const isLoggedIn = useAuthContext()
  const { postRequest, postLoading } = usePost()
  const [avatar, setAvatar] = useState(1)
  const [mounted, setMounted] = useState(false)

  const handleData = data => {
    setToken(data.token)
    Router.push('/')
  }

  useEffect(() => {
    setMounted(true)
    isLoggedIn && Router.push('/')
  }, [isLoggedIn])

  if (!mounted) {
    return <Loading />
  }

  return (
    <Layout title="Sign Up">
      <Container>
        <h1 className={s.heading}>
          join <span>comments</span> app
        </h1>
        <Avatar userAvatar={avatar} fn={setAvatar} />
        <p className="sr-only">fill your info</p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data =>
              postRequest(SIGNUP, { ...data, avatar }, handleData),
            )}
          >
            <Formfield {...username} />
            <Formfield {...password} />
            <Button disabled={isError(methods.formState.errors)} styles={s.btn}>
              sign up
            </Button>
          </form>
        </FormProvider>
      </Container>
    </Layout>
  )
}
