import { Comment, Thread, Write } from 'components'
import { Container, Layout, Loading } from 'elements'
import { useGet } from 'hooks'
import { useEffect, useState } from 'react'
import { GET_ALL_COMMENTS } from 'services'

export default function Home() {
  const { getRequest, getLoading } = useGet()
  const [thread, setThread] = useState([])
  const [mounted, setMounted] = useState(false)

  const updateThread = comment => {
    setThread([comment, ...thread])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleData = data => {
    setMounted(true)
    setThread(data.comments)
  }

  useEffect(() => {
    getRequest(GET_ALL_COMMENTS, handleData)
  }, [])

  if (getLoading || !mounted) {
    return <Loading />
  }

  return (
    <Layout title="Homepage">
      <Container>
        <Thread thread={thread} />
        <Write updateThread={updateThread} />
      </Container>
    </Layout>
  )
}
