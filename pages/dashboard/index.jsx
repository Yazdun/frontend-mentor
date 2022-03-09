import { Avatar } from 'components'
import {
  Button,
  Container,
  Formfield,
  Layout,
  Loading,
  RenderErrors,
} from 'elements'
import React from 'react'
import { useState, useEffect } from 'react'
import { UPDATE_USER, USER_INFO } from 'services'
import { username, isError } from 'utils'
import { useForm, FormProvider } from 'react-hook-form'
import { usePatch, useGet } from 'hooks'
import s from './styles.module.scss'
import { useAuthActions, useAuthContext } from 'context'
import Router from 'next/router'

export default function Dashboard() {
  const [avatar, setAvatar] = useState(null)
  const [mounted, setMounted] = useState(false)
  const { setToken, setAvatar: updateAvatar } = useAuthActions()
  const { token } = useAuthContext()

  const methods = useForm()

  const { getRequest, getLoading } = useGet()
  const { patchRequest, patchLoading, patchErrors } = usePatch()

  const handleData = data => {
    setAvatar(data.user.avatar)
    methods.setValue('username', data.user.username)
  }

  const patchData = data => {
    setToken(data.token)
    updateAvatar(data.user.avatar)
  }
  useEffect(() => {
    !token && Router.push('/')
    token && getRequest(USER_INFO, handleData)
    setMounted(true)
  }, [])

  if (getLoading || !mounted) {
    return <Loading />
  }

  return (
    <Layout title="Dashboard">
      <Container>
        <Avatar userAvatar={avatar} fn={setAvatar} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data =>
              patchRequest(UPDATE_USER, { ...data, avatar }, patchData),
            )}
          >
            <Formfield {...username} />
            <RenderErrors errors={patchErrors} />
            <Button
              disabled={isError(methods.formState.errors) || patchLoading}
              loading={patchLoading}
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
