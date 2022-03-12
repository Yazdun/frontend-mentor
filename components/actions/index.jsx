import { Button } from 'elements'
import s from './styles.module.scss'
import { HiOutlineReply } from 'react-icons/hi'
import { MdEdit, MdDelete } from 'react-icons/md'

export const Actions = ({ reply, setReply, edit, setEdit, isOwner }) => {
  return (
    <div className={s.actions}>
      {isOwner ? (
        <div className={s.owner}>
          <Button transparent danger>
            delete
          </Button>
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
