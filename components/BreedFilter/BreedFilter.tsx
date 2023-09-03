import { SyntheticEvent } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useFetchDogBreeds } from "@hooks/Dogs/useFetchDogBreeds"

const BreedFilter = ({ setCurrentBreed }: { setCurrentBreed: Function }): JSX.Element => {
  const { data } = useFetchDogBreeds(true)
  const options = data ?? []
  const onChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string[] | undefined
  ) => {
    setCurrentBreed(newValue)
  }

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id='breed-filter'
      options={options}
      onChange={onChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='Breed' />}
    />
  )
}
export default BreedFilter
