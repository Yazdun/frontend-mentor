import { Button } from 'elements'
import s from './styles.module.scss'
import { HiOutlineReply } from 'react-icons/hi'
import { Modal } from 'components'

export const Actions = ({
  reply,
  setReply,
  edit,
  setEdit,
  isOwner,
  deleteFn,
  commentId,
}) => {
  return (
    <div className={s.actions}>
      {isOwner ? (
        <div className={s.owner}>
          <Modal deleteFn={deleteFn} commentId={commentId} />
          <Button transparent onClick={() => setEdit(prev => !prev)}>
            {edit ? 'cancel' : 'edit'}
          </Button>
        </div>
      ) : (
        <Button transparent onClick={() => setReply(prev => !prev)}>
          {reply ? (
            'cancel'
          ) : (
            <>
              <HiOutlineReply />
              reply
            </>
          )}
        </Button>
      )}
    </div>
  )
}
