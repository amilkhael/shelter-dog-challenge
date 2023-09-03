import { Post } from "@api/fetchData/fetchData"
import { Dog } from "./DogInterface.interface"

export const fetchDogsInformation = (dogIds: string[]): Promise<Dog[]> => {
  const endpoint = "/dogs"
  return Post<Dog[]>({ endpoint, data: dogIds }) as Promise<Dog[]>
}
