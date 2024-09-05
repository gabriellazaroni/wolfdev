/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Auth } from 'aws-amplify'

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextProps {
  isUserLogged: boolean
  setIsUserLogged: (value: boolean) => void
  userToken: string
  changeToken: () => void
  userInfos: any
  setUserInfos: (value: any) => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: AuthProviderProps) {
  const [userToken, setUserToken] = useState(undefined)
  const [isUserLogged, setIsUserLogged] = useState(true)
  const [userInfos, setUserInfos] = useState({})

  const changeToken = () => {
    Auth.currentSession()
      .then((userSession: any) => {
        setUserToken(userSession.idToken.jwtToken)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <AuthContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        userToken,
        changeToken,
        userInfos,
        setUserInfos
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
