import React, { useState, createContext, useEffect, useContext } from 'react'
import { avatarIsValid } from 'utils'

export const AuthProviderContext = createContext()
export const AuthProviderContextDispatcher = createContext()

const STORAGE_KEYS = {
  TOKEN: 'token',
  AVATAR: 'avatar',
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false)
  const [avatar, setAvatar] = useState(false)

  useEffect(() => {
    const initialState = () =>
      JSON.parse(localStorage.getItem(STORAGE_KEYS.TOKEN) || false)

    const initialAvatar = () =>
      JSON.parse(localStorage.getItem(STORAGE_KEYS.AVATAR) || false)

    setToken(initialState)
    setAvatar(initialAvatar)
  }, [])

  const logOut = () => {
    localStorage.clear('TOKEN')
    localStorage.clear('AVATAR')
    window.location.href = '/'
  }

  useEffect(() => {
    if (token) {
      const data = JSON.stringify(token)
      localStorage.setItem(STORAGE_KEYS.TOKEN, data)
    }

    if (avatar) {
      avatarIsValid(avatar)
        ? localStorage.setItem(STORAGE_KEYS.AVATAR, avatar)
        : logOut()
    }
  }, [token, avatar])

  return (
    <AuthProviderContext.Provider value={{ token, avatar }}>
      <AuthProviderContextDispatcher.Provider
        value={{ setToken, logOut, setAvatar }}
      >
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthProviderContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProviderContext')
  }
  return context
}

export const useAuthActions = () => {
  const context = useContext(AuthProviderContextDispatcher)
  if (context === undefined) {
    throw new Error(
      'useAuthActions must be used within a AuthProviderContext/AuthProviderContextDispatcher',
    )
  }
  return context
}
