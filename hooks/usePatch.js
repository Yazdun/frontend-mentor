import { useState } from 'react'
import axios from 'axios'
import '../axios'
import { useStatusError } from 'context'

export const usePatch = () => {
  const [patchLoading, setPatchLoading] = useState(false)
  const setErrorStatusCode = useStatusError()
  const [patchErrors, setErrors] = useState([])

  const patchRequest = async (url, values, fn) => {
    setPatchLoading(true)
    setErrors([])

    try {
      await axios
        .patch(url, {
          ...values,
        })
        .then(res => fn(res.data))
        .then(() => setPatchLoading(false))
    } catch (error) {
      if (!error.response) {
        setErrorStatusCode('NETWORK')
        setPatchLoading(false)
      } else {
        setErrorStatusCode(error.response.status)
        setPatchLoading(false)
        setErrors(error.response.data.msg.split(','))
        console.log(error)
      }
    }
  }

  return { patchRequest, patchErrors, patchLoading }
}
