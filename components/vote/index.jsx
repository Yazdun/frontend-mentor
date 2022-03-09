import { HiPlus, HiMinus } from 'react-icons/hi'
import { useState } from 'react'
import s from './styles.module.scss'

export const Vote = ({ upvotes, commentId }) => {
  const [votes, setVotes] = useState(upvotes || 0)

  return (
    <div className={s.vote}>
      <button>
        <HiPlus />
      </button>
      {votes}
      <button>
        <HiMinus />
      </button>
    </div>
  )
}
