import { useState } from 'react'
import axios from 'axios'
import '../axios'

export const usePost = () => {
  const [postLoading, setPostLoading] = useState(false)
  const [postErrors, setErrors] = useState([])

  const postRequest = async (url, values, fn) => {
    setPostLoading(true)
    setErrors([])

    try {
      await axios
        .post(url, {
          ...values,
        })
        .then(res => fn(res.data))
        .then(() => setPostLoading(false))
    } catch (error) {
      if (!error.response) {
        setPostLoading(false)
      } else {
        setErrors(error.response.data.msg.split(','))
        setPostLoading(false)
      }
    }
  }

  return { postRequest, postLoading, postErrors }
}
