import { Get } from "@api/fetchData/fetchData"
import { SearchDogsParamsInterface } from "./SearchDogsParamsInterface.interface"
import { SearchDogsResponseInterface } from "./SearchDogsResponseInterface.interface"

export const searchingDogs = (
  params: SearchDogsParamsInterface | null
): Promise<SearchDogsResponseInterface> => {
  const endpoint = "/dogs/search"
  return Get<SearchDogsResponseInterface>({
    endpoint,
    params,
  }) as Promise<SearchDogsResponseInterface>
}
