import { Dog } from "@services/fetchDogsInformation/DogInterface.interface"
export interface DogCard extends Dog {
  handleDogSelection: (event: React.ChangeEvent<HTMLInputElement>, dogId: string) => void
  dogSelection: string[]
}
