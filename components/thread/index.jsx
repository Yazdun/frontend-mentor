import { Comment } from 'components'

export const Thread = ({ thread }) => {
  return (
    <>
      {thread.map(comment => {
        return <Comment comment={comment} key={comment._id} />
      })}
    </>
  )
}
