import { Vote, Author } from 'components'

import s from './styles.module.scss'

export const Comment = ({ comment }) => {
  const {
    _id: commentId,
    author,
    content,
    upvoted,
    downvoted,
    votesCount,
    createdAt: time,
  } = comment

  return (
    <div className={s.comment}>
      <p className="sr-only">comment section</p>
      <div className={s.body}>
        <Author author={author} time={time} />
        <p className={s.content}>{content}</p>
      </div>
      <Vote
        votesCount={votesCount}
        isUpvoted={upvoted}
        isDownvoted={downvoted}
        commentId={commentId}
      />
    </div>
  )
}
