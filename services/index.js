export const PUBLIC_SIGNUP = '/public/auth/signup'
export const PUBLIC_LOGIN = '/public/auth/login'
export const PUBLIC_GET_ALL_COMMENT = '/public/comment'
export const PROTECTED_CREATE_COMMENT = '/protected/comment/create'
export const DELETE_COMMENT = id => `/protected/comment/delete/${id}`
export const UPDATE_COMMENT = id => `/protected/comment/update/${id}`
export const VOTE_COMMENT = id => `/protected/comment/vote/${id}`
export const REPLY_COMMENT = id => `/protected/comment/reply/${id}`
