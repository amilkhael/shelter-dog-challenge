import { useContext } from "react"
import { SelectedDogsContextProps, SelectedDogsContext } from "@context/selectedDogs"

const useSelectedDogsContext = (): SelectedDogsContextProps => {
  const context = useContext<SelectedDogsContextProps>(SelectedDogsContext)

  if (context === undefined)
    throw new Error("useSelectedDogsContext hook must be used within a context provider")

  return context
}

export default useSelectedDogsContext
