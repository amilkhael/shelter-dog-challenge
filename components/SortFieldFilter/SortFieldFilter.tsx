import { useState, MouseEvent } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { SearchDogsParamsInterface } from "@api/searchingDogs/SearchDogsParamsInterface.interface"

const SortFieldFilter = ({
  field,
  setParams,
}: {
  field: string
  setParams: Function
}) => {
  const [sortDirection, setSortDirection] = useState("asc")

  const handleChange = (event: MouseEvent<HTMLElement>, newSortDirection: string) => {
    setSortDirection(newSortDirection)
    setParams((prevParams: SearchDogsParamsInterface) => ({
      ...prevParams,
      sort: `${field}:${newSortDirection}`,
    }))
  }

  return (
    <ToggleButtonGroup
      color='primary'
      value={sortDirection}
      exclusive
      onChange={handleChange}
      aria-label='Sort data'
    >
      <ToggleButton value='asc'>Ascendent</ToggleButton>
      <ToggleButton value='desc'>Descendant</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default SortFieldFilter
