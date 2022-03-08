import { Layout } from 'elements'
import s from './styles.module.scss'

export const Loading = () => {
  return (
    <Layout title="Loading">
      <h1 className="sr-only">loading, please wait</h1>
      <div className={s.loading}>
        <div></div>
        <div></div>
      </div>
    </Layout>
  )
}
