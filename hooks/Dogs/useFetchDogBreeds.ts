import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { fetchDogBreeds } from "@services/fetchDogBreeds/fetchDogBreed"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"

export const useFetchDogBreeds = (
  enabled = false
): UseQueryResult<void | string[], unknown> =>
  useQuery({
    enabled,
    queryFn: fetchDogBreeds,
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.GET_BREEDS, enabled],
    refetchOnMount: true,
  })
