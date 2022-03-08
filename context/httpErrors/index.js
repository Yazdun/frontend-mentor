import React from 'react'
import { createContext, useState, useContext } from 'react'
import { useAuthContext, useAuthActions } from '..'
import { Error } from '../../pages'
import { RiSignalWifiErrorLine } from 'react-icons/ri'
import { MdOutlineWifiTetheringErrorRounded } from 'react-icons/md'
import { HttpError } from 'components'

const StatusErrorContext = createContext()

export const StatusErrorProvider = ({ children }) => {
  const { logOut } = useAuthActions()
  const { token } = useAuthContext()
  const [errorStatusCode, setErrorStatusCode] = useState()

  const errorHandler = statusCode => setErrorStatusCode(statusCode)

  const renderContent = () => {
    switch (true) {
      case errorStatusCode === 401:
        if (token) return logOut()
        return children

      case errorStatusCode >= 500:
        return (
          <HttpError
            icon={<MdOutlineWifiTetheringErrorRounded />}
            title="500 ! server error"
            desc="there is something wrong within our servers and we are looking into it"
          />
        )

      case errorStatusCode === 'NETWORK':
        return (
          <HttpError
            icon={<RiSignalWifiErrorLine />}
            title="network error"
            desc="there is something wrong with your network connection"
          />
        )

      default:
        return children
    }
  }

  return (
    <StatusErrorContext.Provider value={{ errorHandler, errorStatusCode }}>
      {renderContent()}
    </StatusErrorContext.Provider>
  )
}

export const useStatusError = () => {
  const context = useContext(StatusErrorContext)
  if (context === undefined) {
    throw new Error(
      'useAuthActions must be used within a AuthProviderContext/AuthProviderContextDispatcher',
    )
  }
  return context
}
