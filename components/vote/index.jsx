import { HiPlus, HiMinus } from 'react-icons/hi'
import { useState } from 'react'
import s from './styles.module.scss'
import { useAuthContext } from 'context'
import cn from 'classnames'
import { BsShieldLockFill } from 'react-icons/bs'
import { usePatch } from 'hooks'
import { DOWNVOTE_COMMENT, UPVOTE_COMMENT } from 'services'
import { RiLoader3Line } from 'react-icons/ri'

export const Vote = ({ votesCount, isUpvoted, isDownvoted, commentId }) => {
  const [status, setStatus] = useState({
    votes: votesCount || 0,
    upvoted: isUpvoted || false,
    downvoted: isDownvoted || false,
  })
  const { votes, upvoted, downvoted } = status
  const { token: isLoggedIn } = useAuthContext()
  const { patchRequest, patchLoading } = usePatch()

  const handleData = data =>
    setStatus({
      votes: data.votes,
      upvoted: data.upvoted,
      downvoted: data.downvoted,
    })

  return (
    <div
      className={cn(
        s.vote,
        !isLoggedIn && s.disable,
        upvoted && s.upvoted,
        downvoted && s.downvoted,
      )}
    >
      <button
        disabled={!isLoggedIn}
        onClick={() => {
          patchRequest(UPVOTE_COMMENT(commentId), {}, handleData)
        }}
      >
        <span className="sr-only">upvote</span>
        <HiPlus />
      </button>
      {patchLoading ? (
        <RiLoader3Line className={s.loading} />
      ) : (
        <>
          <span className="sr-only">
            {votes >= 0 ? 'upvotes count' : 'downvotes count'}
          </span>
          {votes}
        </>
      )}

      <button
        disabled={!isLoggedIn}
        onClick={() => {
          patchRequest(DOWNVOTE_COMMENT(commentId), {}, handleData)
        }}
      >
        <span className="sr-only">downvote</span>
        <HiMinus />
      </button>
      {!isLoggedIn && (
        <div className={cn(s.auth)}>
          <BsShieldLockFill />
        </div>
      )}
    </div>
  )
}
