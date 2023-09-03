import { Post } from "@services/fetchData/fetchData"
import { Dog } from "./DogInterface.interface"

export const fetchDogsInformation = (dogIds: string[]): Promise<Dog[]> => {
  const endpoint = "/dogs"
  return Post<string[] | Dog[]>({ endpoint, data: dogIds }) as Promise<Dog[]>
}
