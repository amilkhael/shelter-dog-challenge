import { Get } from "@api/fetchData/fetchData"
import { SearchDogsResponseInterface } from "./SearchDogsResponseInterface.interface"

export const searchingDogs = (
  params: string | null
): Promise<SearchDogsResponseInterface> => {
  const endpoint = "/dogs/search"
  return Get<SearchDogsResponseInterface>({
    endpoint,
    params,
  }) as Promise<SearchDogsResponseInterface>
}
