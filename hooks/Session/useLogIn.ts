import { MutationFunction, useMutation } from "@tanstack/react-query"
import { login } from "@services/login/login"
import { Provider } from "@models/Providers"
import { sessionActions, Status } from "./Session.models"

export const useLogin = () => {
  const mutationInterface = useMutation(login as MutationFunction, {
    mutationKey: [Provider.SHELTER_LOGIN, sessionActions.LOGIN],
  })

  let outcome: Status | null = null

  if (mutationInterface.isSuccess) outcome = Status.LOG_IN_SUCCESS
  if (mutationInterface.isError) outcome = Status.LOG_IN_ERROR

  return {
    ...mutationInterface,
    outcome,
  }
}
