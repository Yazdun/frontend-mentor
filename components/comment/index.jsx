import { Vote, Author, Actions, Write } from 'components'
import { useAuthContext } from 'context'
import { Button, Formfield, RenderErrors } from 'elements'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { editComment, isError } from 'utils'
import s from './styles.module.scss'
import { usePatch } from 'hooks'
import { UPDATE_COMMENT } from 'services'
import { placeholder } from './data'
import cn from 'classnames'

export const Comment = ({ data }) => {
  const [comment, setComment] = useState(data || placeholder)
  const [isDeleted, setIsDeleted] = useState(false)

  const {
    _id: commentId,
    author,
    content,
    upvoted,
    downvoted,
    votesCount,
    createdAt: time,
    owner,
    replies,
  } = comment

  useEffect(() => {
    setComment(data)
  }, [data])

  const methods = useForm()
  const { patchRequest, patchLoading, patchErrors } = usePatch()

  const [isReply, setIsReply] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [commentReplies, setCommentReplies] = useState(replies || [])

  const updateThread = comment => {
    setCommentReplies([...commentReplies, comment])
    setIsReply(false)
  }

  const deleteComment = () => setIsDeleted(true)

  const { token: isLoggedIn } = useAuthContext()

  useEffect(() => {
    methods.setValue('content', content)
  }, [isEdit])

  const handleData = data => {
    setComment(data.comment)
    setIsEdit(false)
  }

  return (
    <>
      <div className={cn(s.comment, isDeleted && s.deleted)}>
        <p className="sr-only">comment section</p>
        <div className={s.body}>
          <Author author={author} time={time} />
          {isLoggedIn && (
            <Actions
              isOwner={owner}
              setReply={setIsReply}
              setEdit={setIsEdit}
              reply={isReply}
              edit={isEdit}
              updateThread={setCommentReplies}
              deleteFn={deleteComment}
              commentId={commentId}
            />
          )}
          {isEdit ? (
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(data =>
                  patchRequest(UPDATE_COMMENT(commentId), data, handleData),
                )}
              >
                <Formfield {...editComment} styles={s.textarea} multiline />
                <RenderErrors errors={patchErrors} />
                <Button
                  disabled={patchLoading || isError(methods.formState.errors)}
                  loading={patchLoading}
                >
                  edit
                </Button>
              </form>
            </FormProvider>
          ) : (
            <p className={s.content}>{content}</p>
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
        <Write isReply commentId={commentId} updateThread={updateThread} />
      )}
      <div className={cn(s.replies, isDeleted && s.deleted)}>
        {commentReplies.map(reply => {
          return <Comment key={reply._id} data={reply} />
        })}
      </div>
    </>
  )
}
