import { useQuery } from "@tanstack/react-query"
import { searchingDogs } from "@services/searchingDogs/searchingDogs"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"
import { SearchDogsParamsInterface } from "@services/searchingDogs/SearchDogsParamsInterface.interface"
import { fetchDogsInformation } from "@services/fetchDogsInformation/fetchDogsInformation"
import { Dog } from "@services/fetchDogsInformation/DogInterface.interface"

const getDataDogsInformation = async ({
  resultIds,
  total,
}: {
  resultIds: string[]
  total: number
}): Promise<{ dogs: Dog[]; total: number }> =>
  await fetchDogsInformation(resultIds).then((data) => ({ dogs: data, total }))

export const useSearchingDogs = (enabled = false, params: SearchDogsParamsInterface) => {
  const formatParams = () => {
    let formattedParams = "?"
    if (params) {
      const { breeds, ...restParams } = params
      const singleParamsEntries = Object.entries(restParams) as string[][]
      const breedsFormatted = breeds?.map((breed) => ["breeds", breed])
      const newParams = breedsFormatted
        ? [...singleParamsEntries, ...breedsFormatted]
        : [...singleParamsEntries]
      const urlParams = new URLSearchParams(newParams)

      formattedParams = `${formattedParams}${urlParams.toString()}`
    }

    return formattedParams
  }
  return useQuery({
    enabled,
    queryFn: () => {
      const data = searchingDogs(formatParams()).then((data) =>
        getDataDogsInformation(data)
      )
      return data
    },
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.SEARCH, params, enabled],
    refetchOnMount: true,
  })
}
