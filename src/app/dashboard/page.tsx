"use client"
import { useState } from "react"
import Container from "@mui/material/Container"
import BreedFilter from "@components/BreedFilter/BreedFilter"
import { SearchDogsParamsInterface } from "@services/searchingDogs/SearchDogsParamsInterface.interface"
import DogGrid from "@components/DogGrid/DogGrid"
import MatchDog from "@components/MatchDog/MatchDog"
import SortFieldFilter from "@components/SortFieldFilter/SortFieldFilter"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

const Dashboard = (): JSX.Element => {
  const [params, setParams] = useState<SearchDogsParamsInterface>({
    from: 0,
    size: 25,
    sort: "breed:asc",
  })

  const setCurrentBreed = (currentBreed: string[]): void => {
    if (currentBreed.length > 0) {
      setParams((prevParams) => ({
        ...prevParams,
        breeds: currentBreed,
      }))
    } else {
      setParams((prevParams) => {
        const clonedParams = { ...prevParams }
        delete clonedParams.breeds
        return clonedParams
      })
    }
  }

  return (
    <Container component='main' maxWidth='xl' style={{ paddingTop: 24 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4 }}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexWrap={"wrap"}
      >
        <Stack spacing={2}>
          <BreedFilter setCurrentBreed={setCurrentBreed} />
          <SortFieldFilter setParams={setParams} field='breed' />
        </Stack>
        <MatchDog />
      </Stack>
      <Stack marginTop='3rem'>
        <Typography variant='body1' color='text.primary'>
          Welcome, we love dogs, and hope you do too! Here you will find lovely shelter
          dogs, with the hope of finding a lucky dog a new home!
        </Typography>
        <Typography variant='body1' color='text.primary'>
          Make their wish true and choose your favorites to discover which one matches
          with you.
        </Typography>
      </Stack>
      <DogGrid params={params} setParams={setParams} />
    </Container>
  )
}

export default Dashboard
