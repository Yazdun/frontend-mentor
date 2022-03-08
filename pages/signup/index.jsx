import {
  Button,
  Container,
  Formfield,
  Layout,
  Loading,
  RenderErrors,
} from 'elements'
import { useForm, FormProvider } from 'react-hook-form'
import { username, password, isError } from 'utils'
import s from './styles.module.scss'
import { Avatar } from 'components'
import { useState } from 'react'
import { usePost } from 'hooks'
import { SIGNUP } from 'services'
import { useAuthActions, useAuthContext } from 'context'
import Router from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SignUp() {
  const methods = useForm()
  const { setToken } = useAuthActions()
  const { token } = useAuthContext()
  const { postRequest, postErrors, postLoading } = usePost()
  const [avatar, setAvatar] = useState(1)
  const [mounted, setMounted] = useState(false)

  console.log(token)

  const handleData = data => {
    setToken(data.token)
    Router.push('/')
  }

  useEffect(() => {
    setMounted(true)
    token && Router.push('/')
  }, [token])

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
            <RenderErrors errors={postErrors} />
            <Button
              disabled={isError(methods.formState.errors) || postLoading}
              loading={postLoading}
              styles={s.btn}
            >
              sign up
            </Button>
          </form>
        </FormProvider>
        <p className={s.sub}>
          already have an account ? <Link href="/login">login</Link>{' '}
        </p>
      </Container>
    </Layout>
  )
}
