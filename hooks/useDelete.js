import { useState } from 'react'
import axios from 'axios'
import '../axios'
import { useStatusError } from 'context'

export const useDelete = () => {
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteErrors, setErrors] = useState([])
  const setErrorStatusCode = useStatusError()

  const deleteRequest = async (url, fn) => {
    setDeleteLoading(true)
    setErrors([])

    try {
      await axios
        .delete(url)
        .then(res => fn(res.data))
        .then(() => setDeleteLoading(false))
    } catch (error) {
      if (!error.response) {
        setErrorStatusCode('NETWORK')
        setDeleteLoading(false)
      } else {
        setErrorStatusCode(error.response.status)
        setDeleteLoading(false)
        setErrors(error.response.data.msg.split(','))
        console.log(error)
      }
    }
  }

  return { deleteRequest, deleteErrors, deleteLoading }
}
