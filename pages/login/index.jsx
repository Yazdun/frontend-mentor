import {
  Button,
  Container,
  Formfield,
  Layout,
  Loading,
  RenderErrors,
} from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { username, noValidatePassword, isError } from 'utils'
import s from './styles.module.scss'
import { useState } from 'react'
import { usePost } from 'hooks'
import { LOGIN } from 'services'
import { useAuthActions, useAuthContext } from 'context'
import Router from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SignUp() {
  const methods = useForm()
  const { setToken } = useAuthActions()
  const isLoggedIn = useAuthContext()
  const { postRequest, postErrors, postLoading } = usePost()
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
        <h1 className={s.heading}>welcome back</h1>

        <p className="sr-only">fill your info</p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data =>
              postRequest(LOGIN, data, handleData),
            )}
          >
            <Formfield {...username} />
            <Formfield {...noValidatePassword} />
            <RenderErrors errors={postErrors} />
            <Button
              disabled={isError(methods.formState.errors) || postLoading}
              loading={postLoading}
              styles={s.btn}
            >
              log me in
            </Button>
          </form>
        </FormProvider>
        <p className={s.sub}>
          not signed up yet ? <Link href="/signup">sign up</Link>{' '}
        </p>
      </Container>
    </Layout>
  )
}
