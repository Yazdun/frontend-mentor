import ReactTimeAgo from 'react-time-ago'
import { a13 } from 'assets'
import Image from 'next/image'
import { avatars } from 'utils'
import s from './styles.module.scss'

export const Author = ({ author, time }) => {
  if (!author) {
    return (
      <div className={s.header}>
        <div className={s.img}>
          <Image
            src={a13}
            placeholder="blur"
            quality={100}
            alt="deleted account"
          />
        </div>
        <div>
          <p>Deleted Account</p>
          <p>A long time ago</p>
        </div>
      </div>
    )
  }
  return (
    <div className={s.header}>
      <div className={s.img}>
        <Image
          src={avatars[author.avatar ? author.avatar : 0].source}
          placeholder="blur"
          quality={100}
          alt={`${author.username} - ${
            avatars[author.avatar ? author.avatar : 0].alt
          }`}
        />
      </div>
      <div>
        <p>
          <span className="sr-only">posted by </span>
          {author.username}
        </p>
        <p>
          <span className="sr-only">time : </span>
          <ReactTimeAgo date={time} locale="en-US" />
        </p>
      </div>
    </div>
  )
}
