export interface SearchConfigurationInterface {
  size?: number //Defaults to 25 if omitted
  from?: number
  sort?: "asc" | "desc"
}
