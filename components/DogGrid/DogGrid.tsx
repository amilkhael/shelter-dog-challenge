import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { useSearchingDogs } from "@hooks/Dogs/useSearchingDogs"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import DogCard from "@components/DogCard/DogCard"
import Pagination from "@mui/material/Pagination"
import { Dog } from "@services/fetchDogsInformation/DogInterface.interface"
import { SearchDogsParamsInterface } from "@services/searchingDogs/SearchDogsParamsInterface.interface"
import useSelectedDogsContext from "@hooks/Context/useSelectedDogsContext"
import Loading from "@components/Loading/Loading"
import ErrorDialog from "@components/ErrorDialog"

const DogGrid = ({
  params,
  setParams,
}: {
  params: SearchDogsParamsInterface
  setParams: Dispatch<SetStateAction<SearchDogsParamsInterface>>
}): JSX.Element => {
  const { isLoading, data, isError } = useSearchingDogs(true, params)
  const [page, setPage] = useState(1)
  const { dogSelection, setDogSelection } = useSelectedDogsContext()
  const total = data?.total ?? 0
  const itemsPerPage = params.size ?? 25
  const lastPage = Math.ceil(total / itemsPerPage)

  useEffect((): void => {
    setPage(1)
    setParams((prevParams: SearchDogsParamsInterface) => ({
      ...prevParams,
      from: 0,
    }))
  }, [params.breeds])

  const calculateFromValue = (
    currentPage: number,
    paramItemsPerPage: number | undefined
  ): number => {
    const itemsPerPage = paramItemsPerPage ?? 25
    return (currentPage - 1) * itemsPerPage
  }

  const handleChange = (event: React.ChangeEvent<unknown>, currentPage: number): void => {
    setPage(currentPage)
    setParams((prevParams: SearchDogsParamsInterface) => ({
      ...prevParams,
      from: calculateFromValue(currentPage, prevParams.size),
    }))
  }

  const handleDogSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    dogId: string
  ): void => {
    if (event.target.checked) {
      setDogSelection([...dogSelection, dogId])
    } else {
      setDogSelection(dogSelection.filter((id) => id !== dogId))
    }
  }
  if (isError) {
    return <ErrorDialog isError={isError} />
  }
  if (isLoading) return <Loading />

  if (!data) return <p>No data</p>

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "2rem 0" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12, lg: 16 }}
        >
          {data?.dogs.map((data: Dog) => (
            <Grid xs={2} sm={4} md={4} key={data.id}>
              <DogCard
                {...data}
                handleDogSelection={handleDogSelection}
                dogSelection={dogSelection}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Pagination count={lastPage} page={page} onChange={handleChange} />
    </>
  )
}

export default DogGrid
