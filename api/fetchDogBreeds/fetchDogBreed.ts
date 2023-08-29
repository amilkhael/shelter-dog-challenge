import { Get } from "@api/fetchData/fetchData"

export const fetchDogBreeds = () => {
  const endpoint = "/dogs/breeds"
  return Get<string[]>({ endpoint })
}
