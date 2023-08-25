import { useQuery } from "@tanstack/react-query"
import { searchingDogs } from "@api/searchingDogs/searchingDogs"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"
import { SearchDogsParamsInterface } from "@api/searchingDogs/SearchDogsParamsInterface.interface"
import { fetchDogsInformation } from "@api/fetchDogsInformation/fetchDogsInformation"
import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"

const getDataDogsInformation = async ({
  resultIds,
}: {
  resultIds: string[]
}): Promise<Dog[]> => await fetchDogsInformation(resultIds).then((data) => data)

export const useSearchingDogs = (
  enabled = false,
  params: SearchDogsParamsInterface | null
) =>
  useQuery({
    enabled,
    queryFn: () => {
      const data = searchingDogs(params).then((data) => getDataDogsInformation(data))
      return data
    },
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.SEARCH, params, enabled],
    refetchOnMount: true,
  })
