"use client"
import { useState } from "react"
import Container from "@mui/material/Container"
import BreedFilter from "@components/BreedFilter/BreedFilter"
import { SearchDogsParamsInterface } from "@services/searchingDogs/SearchDogsParamsInterface.interface"
import DogGrid from "@components/DogGrid/DogGrid"
import MatchDog from "@components/MatchDog/MatchDog"
import SortFieldFilter from "@components/SortFieldFilter/SortFieldFilter"
import Stack from "@mui/material/Stack"

const Dashboard = () => {
  const [params, setParams] = useState<SearchDogsParamsInterface>({
    from: 0,
    size: 25,
    sort: "breed:asc",
  })

  const setCurrentBreed = (currentBreed: string[]) => {
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
      <DogGrid params={params} setParams={setParams} />
    </Container>
  )
}

export default Dashboard
