"use client"

import { createContext, Dispatch, ReactNode, useState } from "react"

export interface SelectedDogsContextProps {
  dogSelection: string[]
  setDogSelection: Dispatch<string[]>
}

export interface SelectedDogsProviderProps {
  children: ReactNode
}

export const SelectedDogsContext = createContext<SelectedDogsContextProps>({
  dogSelection: [],
  setDogSelection: (data: string[]) => void data,
})

const Provider = SelectedDogsContext.Provider

export const SelectedDogsProvider = ({
  children,
}: SelectedDogsProviderProps): JSX.Element => {
  const [dogSelection, setDogSelection] = useState<string[]>([])

  return <Provider value={{ dogSelection, setDogSelection }}>{children}</Provider>
}
