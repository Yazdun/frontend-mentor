export const SIGNUP = '/public/auth/signup'
export const LOGIN = '/public/auth/login'
export const GET_ALL_COMMENTS = '/public/comment'
export const CREATE_COMMENT = '/protected/comment/create'
export const USER_INFO = '/protected/user/'
export const UPDATE_USER = '/protected/user/update'
export const DELETE_COMMENT = id => `/protected/comment/delete/${id}`
export const UPDATE_COMMENT = id => `/protected/comment/update/${id}`
export const VOTE_COMMENT = id => `/protected/comment/vote/${id}`
export const REPLY_COMMENT = id => `/protected/comment/reply/${id}`
