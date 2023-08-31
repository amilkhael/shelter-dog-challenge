import { MutationFunction, useMutation } from "@tanstack/react-query"
import { matchingDogs } from "@api/matchingDogs/matchingDogs"
import { Provider } from "@models/Providers"
import { dogActions, Status } from "./Dogs.models"

export const useMatchDog = () => {
  let mutationInterface = useMutation(matchingDogs as MutationFunction, {
    mutationKey: [Provider.SHELTER_LOGIN, dogActions.MATCH],
  })

  let outcome: Status | null = null

  if (mutationInterface.isSuccess) outcome = Status.MATCH_SUCCESS
  if (mutationInterface.isError) outcome = Status.MATCH_ERROR

  return {
    ...mutationInterface,
    outcome,
  }
}
