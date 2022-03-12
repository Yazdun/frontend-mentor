import { Comment } from 'components'

export const Thread = ({ thread }) => {
  // console.log(thread)
  return (
    <>
      {thread.map(comment => {
        return <Comment data={comment} key={comment._id} />
      })}
    </>
  )
}
