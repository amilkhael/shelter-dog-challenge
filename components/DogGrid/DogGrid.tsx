import { useState, useEffect } from "react"
import { useSearchingDogs } from "@hooks/Dogs/useSearchingDogs"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import DogCard from "@components/DogCard/DogCard"
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"
import { SearchDogsParamsInterface } from "@api/searchingDogs/SearchDogsParamsInterface.interface"

const DogGrid = ({
  params,
  setParams,
}: {
  params: SearchDogsParamsInterface
  setParams: Function
}) => {
  const { isLoading, data } = useSearchingDogs(true, params)
  const [page, setPage] = useState(1)
  const [dogSelection, setDogSelection] = useState<string[]>([])
  const total = data?.total ?? 0
  const itemsPerPage = params.size ?? 25
  const lastPage = Math.ceil(total / itemsPerPage)

  useEffect(() => {
    setPage(1)
    setParams((prevParams: SearchDogsParamsInterface) => ({
      ...prevParams,
      from: 0,
    }))
  }, [params.breeds])

  const calculateFromValue = (
    currentPage: number,
    paramItemsPerPage: number | undefined
  ) => {
    const itemsPerPage = paramItemsPerPage ?? 25
    return (currentPage - 1) * itemsPerPage
  }

  const handleChange = (event: React.ChangeEvent<unknown>, currentPage: number) => {
    setPage(currentPage)
    setParams((prevParams: SearchDogsParamsInterface) => ({
      ...prevParams,
      from: calculateFromValue(currentPage, prevParams.size),
    }))
  }

  const handleDogSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    dogId: string
  ) => {
    setDogSelection((prevDogSelection) => {
      if (event.target.checked) {
        return [...prevDogSelection, dogId]
      } else {
        return prevDogSelection.filter((id) => id !== dogId)
      }
    })
  }

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='body1' color='text.primary'>
          Loading...
        </Typography>
      </Box>
    )

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "2rem 0" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
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
