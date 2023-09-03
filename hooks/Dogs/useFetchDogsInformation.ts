import { useQuery } from "@tanstack/react-query"
import { fetchDogsInformation } from "@api/fetchDogsInformation/fetchDogsInformation"
import { Provider } from "@models/Providers"
import { dogActions } from "./Dogs.models"

export const useFetchDogsInformation = (enabled = false, dogIds: string[]) =>
  useQuery({
    enabled,
    queryFn: () => fetchDogsInformation(dogIds).then((data) => data),
    queryKey: [Provider.SHELTER_DASHBOARD, dogActions.GET_INFORMATION, enabled, dogIds],
    refetchOnMount: true,
  })
