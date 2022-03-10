import { Vote, Author, Actions, Write } from 'components'
import { useAuthContext } from 'context'
import { useState } from 'react'

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
    owner,
    parent,
    replies,
  } = comment

  const [isReply, setIsReply] = useState(false)
  const [commentReplies, setCommentReplies] = useState(replies || [])

  const updateThread = comment => {
    setCommentReplies([comment, ...commentReplies])
    setIsReply(false)
  }

  const { token: isLoggedIn } = useAuthContext()

  return (
    <>
      <div className={s.comment}>
        <p className="sr-only">comment section</p>
        <div className={s.body}>
          <Author author={author} time={time} />
          <p className={s.content}>{content}</p>
          {isLoggedIn && (
            <Actions
              isOwner={owner}
              setReply={setIsReply}
              reply={isReply}
              updateThread={setCommentReplies}
            />
          )}
        </div>
        <Vote
          votesCount={votesCount}
          isUpvoted={upvoted}
          isDownvoted={downvoted}
          commentId={commentId}
        />
      </div>
      {isReply && (
        <Write
          isReply
          commentId={parent ? parent : commentId}
          updateThread={updateThread}
        />
      )}
      <div className={s.replies}>
        {commentReplies.map(reply => {
          return <Comment key={reply._id} comment={reply} />
        })}
      </div>
    </>
  )
}
