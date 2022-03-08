import { Avatar } from 'components'
import {
  Button,
  Container,
  Formfield,
  Layout,
  Loading,
  RenderErrors,
} from 'elements'
import { useGet } from 'hooks/useGet'
import React from 'react'
import { useState, useEffect } from 'react'
import { USER_INFO } from 'services'
import { username, isError } from 'utils'
import { useForm, FormProvider } from 'react-hook-form'
import { usePost } from 'hooks'
import s from './styles.module.scss'

export default function Dashboard() {
  const [avatar, setAvatar] = useState(null)
  const [mounted, setMounted] = useState(false)
  const methods = useForm()

  const { getRequest, getLoading } = useGet()
  const { postRequest, postLoading } = usePost()

  const handleData = data => {
    setAvatar(data.user.avatar)
    methods.setValue('username', data.user.username)
  }

  useEffect(() => {
    getRequest(USER_INFO, handleData)
    setMounted(true)
  }, [])

  if (getLoading || !mounted) {
    return <Loading />
  }

  return (
    <Layout title="dashboard">
      <Container>
        <Avatar userAvatar={avatar} fn={setAvatar} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data =>
              postRequest(SIGNUP, { ...data, avatar }, handleData),
            )}
          >
            <Formfield {...username} />
            {/* <RenderErrors errors={postErrors} /> */}
            <Button
              disabled={isError(methods.formState.errors) || postLoading}
              loading={postLoading}
              styles={s.btn}
            >
              update my info
            </Button>
          </form>
        </FormProvider>
      </Container>
    </Layout>
  )
}
