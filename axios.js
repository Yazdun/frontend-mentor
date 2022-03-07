import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/api/v1'

axios.interceptors.request.use(function (req) {
  const token = localStorage.getItem('token')
  if (token) {
    const authToken = JSON.parse(token)
    req.headers.authorization = `Bearer ${authToken}`
    return req
  }
  return req
})
