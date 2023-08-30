"use client"
import { useState } from "react"
import Container from "@mui/material/Container"
import BreedFilter from "@components/BreedFilter/BreedFilter"
import { SearchDogsParamsInterface } from "@api/searchingDogs/SearchDogsParamsInterface.interface"
import DogGrid from "@components/DogGrid/DogGrid"

const Dashboard = () => {
  const [params, setParams] = useState<SearchDogsParamsInterface>({
    from: 0,
    size: 25,
  })

  const setCurrentBreed = (currentBreed: string[]) => {
    if (currentBreed.length > 0) {
      setParams((prevParams) => ({
        ...prevParams,
        breeds: currentBreed,
      }))
    } else {
      setParams((prevParams) => {
        const { breeds, ...restParams } = prevParams
        return restParams
      })
    }
  }

  return (
    <Container component='main' maxWidth='xl' style={{ paddingTop: 24 }}>
      <BreedFilter setCurrentBreed={setCurrentBreed} />
      <DogGrid params={params} setParams={setParams} />
    </Container>
  )
}

export default Dashboard
