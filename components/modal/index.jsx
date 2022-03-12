import { Button, Container, RenderErrors } from 'elements'
import s from './styles.module.scss'
import { useState, useRef, useEffect } from 'react'
import Animated from 'react-mount-animation'
import { mountBackground } from './animations'
import { useDelete } from 'hooks'
import { DELETE_COMMENT } from 'services'

export const Modal = ({ commentId, deleteFn }) => {
  const [show, setShow] = useState(false)
  const ref = useRef()
  const { deleteRequest, deleteLoading, deleteErrors } = useDelete()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [show])

  return (
    <>
      <Button transparent danger onClick={() => setShow(true)}>
        delete
      </Button>

      <Animated.div
        className={s.modal}
        show={show}
        mountAnim={mountBackground}
        time={0.2}
      >
        <div className={s.card} ref={ref}>
          <h2>Delete comment</h2>
          <p>
            Are you sure you want to delete this comment? This will be remove
            the comment and cannot be undone
          </p>
          <RenderErrors errors={deleteErrors} />
          <div className={s.btns}>
            <Button neutral onClick={() => setShow(false)}>
              no, cancel
            </Button>
            <Button
              danger
              onClick={() => deleteRequest(DELETE_COMMENT(commentId), deleteFn)}
              disabled={deleteLoading}
              loading={deleteLoading}
            >
              yes, delete
            </Button>
          </div>
        </div>
      </Animated.div>
    </>
  )
}
