import { Post } from "@api/fetchData/fetchData"
import { MatchingDogResponse } from "./MatchingDogResponse.interface"

export const matchingDogs = (dogIds: string[]): Promise<MatchingDogResponse> => {
  const endpoint = "/dogs/match"
  return Post<MatchingDogResponse>({
    endpoint,
    data: dogIds,
  }) as Promise<MatchingDogResponse>
}
