import { useQuery } from "@tanstack/react-query"
import { fetchDogBreeds } from "@api/fetchDogBreeds/fetchDogBreed"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"

export const useFetchDogBreeds = (enabled = false) =>
  useQuery({
    enabled,
    queryFn: fetchDogBreeds,
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.GET_BREEDS, enabled],
    refetchOnMount: true,
  })
