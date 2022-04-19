import { Layout } from 'elements'
import s from './styles.module.scss'
import { MdOutlineNearbyError } from 'react-icons/md'

export default function Page404() {
  return (
    <Layout title="Countries | Error">
      <div className={s.error}>
        <MdOutlineNearbyError />
        <div className={s.errinfo}>
          <h1>Oops ...</h1>
          <p>Looks like this page doesn&apos;t exist</p>
        </div>
      </div>
    </Layout>
  )
}
