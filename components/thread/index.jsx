import { Comment } from 'components'

export const Thread = ({ thread }) => {
  return (
    <>
      {thread.map(comment => {
        return <Comment key={comment._id} comment={comment} />
      })}
    </>
  )
}
