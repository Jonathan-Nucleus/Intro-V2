import React, { FC, ReactNode, createContext, useContext, useState } from 'react'

interface SignoutProps {
  value: boolean
  toggleValue: () => void
}

const SignoutContext = createContext<SignoutProps | null>(null)

export const SignoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(false);
  return (
    <SignoutContext.Provider
      value={{
        value,
        toggleValue: () => setValue(!value)
      }}
    >
      {children}
    </SignoutContext.Provider>
  )
}

export const useSignout = (): SignoutProps => {
  const context = useContext(SignoutContext)
  if (!context) {
    throw new Error('Missing context')
  }

  const { value, toggleValue } = context
  return { value, toggleValue }
}