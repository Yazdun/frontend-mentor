import { Vote } from 'components'
import Image from 'next/image'
import { avatars } from 'utils'
import s from './styles.module.scss'
import ReactTimeAgo from 'react-time-ago'
import { a13 } from 'assets'

export const Comment = ({ comment }) => {
  const { _id: commentId, author, content, upvotes, createdAt: time } = comment

  return (
    <div className={s.comment}>
      <div className={s.body}>
        <Header author={author} time={time} />
        <p className={s.content}>{content}</p>
      </div>
      <Vote upvotes={upvotes.length} commentId={commentId} />
    </div>
  )
}

const Header = ({ author, time }) => {
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
          src={avatars[author.avatar].source}
          placeholder="blur"
          quality={100}
          alt={avatars[author.avatar].alt}
        />
      </div>
      <div>
        <p>{author.username}</p>
        <p>
          <ReactTimeAgo date={time} locale="en-US" />
        </p>
      </div>
    </div>
  )
}
