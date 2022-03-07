import React, { useState, createContext, useEffect, useContext } from 'react'

export const AuthProviderContext = createContext()
export const AuthProviderContextDispatcher = createContext()

const STORAGE_KEY = {
  TOKEN: 'token',
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false)

  useEffect(() => {
    const initialState = () =>
      JSON.parse(localStorage.getItem(STORAGE_KEY.TOKEN) || false)
    setToken(initialState)
  }, [])

  const logOut = () => {
    localStorage.clear('TOKEN')
    window.location.href = '/'
  }

  useEffect(() => {
    if (token) {
      const data = JSON.stringify(token)
      localStorage.setItem(STORAGE_KEY.TOKEN, data)
    }
  }, [token])

  return (
    <AuthProviderContext.Provider value={token}>
      <AuthProviderContextDispatcher.Provider value={{ setToken, logOut }}>
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
