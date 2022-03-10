import { Button } from 'elements'
import s from './styles.module.scss'
import { HiOutlineReply } from 'react-icons/hi'
import { IoReturnDownForward } from 'react-icons/io5'

export const Actions = ({ reply, setReply, isOwner }) => {
  return (
    <div className={s.actions}>
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
    </div>
  )
}
