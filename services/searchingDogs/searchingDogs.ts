import { Get } from "@services/fetchData/fetchData"
import { SearchDogsResponseInterface } from "./SearchDogsResponseInterface.interface"

export const searchingDogs = (
  params: string | undefined
): Promise<SearchDogsResponseInterface> => {
  const endpoint = "/dogs/search"
  return Get<SearchDogsResponseInterface>({
    endpoint,
    params,
  }) as Promise<SearchDogsResponseInterface>
}
