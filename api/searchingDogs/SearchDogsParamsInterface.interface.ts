import { SearchConfigurationInterface } from "@api/SearchConfigurationInterface.interface"

export interface SearchDogsParamsInterface extends SearchConfigurationInterface {
  breeds?: string[]
  zipCodes?: string[]
  ageMin?: number
  ageMax?: number
}
