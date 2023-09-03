import { Get } from "@services/fetchData/fetchData"

export const fetchDogBreeds = (): Promise<void | string[]> => {
  const endpoint = "/dogs/breeds"
  return Get<string[]>({ endpoint })
}
