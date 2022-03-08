import { useState } from 'react'
import axios from 'axios'
import '../axios'
import { useStatusError } from 'context'

export const useGet = () => {
  const [getLoading, setGetLoading] = useState(false)
  const [getErrors, setErrors] = useState([])
  const setErrorStatusCode = useStatusError()

  const getRequest = async (url, fn) => {
    setGetLoading(true)

    try {
      await axios
        .get(url)
        .then(res => fn(res.data))
        .then(() => setGetLoading(false))
    } catch (error) {
      if (!error.response) {
        setErrorStatusCode('NETWORK')
        setGetLoading(false)
      } else {
        setErrorStatusCode(error.response.status)
        setGetLoading(false)
        setErrors(error.response.data.msg.split(','))
        console.log(error)
      }
    }
  }

  return { getRequest, getErrors, getLoading }
}
