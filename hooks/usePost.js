import { useState } from 'react'
import axios from 'axios'
import '../axios'

export const usePost = () => {
  const [postLoading, setPostLoading] = useState(false)

  const postRequest = async (url, values, fn) => {
    setPostLoading(true)

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
        console.log(error.response.data.msg)
        setPostLoading(false)
      }
    }
  }

  return { postRequest, postLoading }
}
