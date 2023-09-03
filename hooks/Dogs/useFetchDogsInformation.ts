import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { fetchDogsInformation } from "@services/fetchDogsInformation/fetchDogsInformation"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"
import { Dog } from "@services/fetchDogsInformation/DogInterface.interface"

export const useFetchDogsInformation = (
  enabled = false,
  dogIds: string[]
): UseQueryResult<Dog[], unknown> =>
  useQuery({
    enabled,
    queryFn: () => fetchDogsInformation(dogIds).then((data) => data),
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.GET_INFORMATION, enabled, dogIds],
    refetchOnMount: true,
  })
