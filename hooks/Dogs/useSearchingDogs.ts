import { useQuery } from "@tanstack/react-query"
import { searchingDogs } from "@api/searchingDogs/searchingDogs"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"
import { SearchDogsParamsInterface } from "@api/searchingDogs/SearchDogsParamsInterface.interface"

export const useSearchingDogs = (
  enabled = false,
  params: SearchDogsParamsInterface | null
) =>
  useQuery({
    enabled,
    queryFn: async () => searchingDogs(params),
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.SEARCH, params, enabled],
    refetchOnMount: true,
  })
