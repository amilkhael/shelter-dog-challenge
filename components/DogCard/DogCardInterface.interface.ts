import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"
export interface DogCard extends Dog {
  handleDogSelection: Function
  dogSelection: string[]
}
