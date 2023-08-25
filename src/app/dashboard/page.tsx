"use client"
import { useState } from "react"
import { useSearchingDogs } from "@hooks/Dogs/useSearchingDogs"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import DogCard from "@components/DogCard/DogCard"
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"

const Dashboard = () => {
  const [params, setParams] = useState({
    from: 0,
    size: 25,
  })
  const [page, setPage] = useState(1)
  const { isLoading, data } = useSearchingDogs(true, params)
  const total = data?.total ?? 0
  const lastPage = Math.ceil(total / 25)

  const calculateFromValue = (currentPage: number, itemsPerPage: number) => {
    return (currentPage - 1) * itemsPerPage
  }

  const handleChange = (event: React.ChangeEvent<unknown>, currentPage: number) => {
    setPage(currentPage)
    setParams((prevParams) => ({
      ...prevParams,
      from: calculateFromValue(currentPage, prevParams.size),
    }))
  }

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Typography variant='body1' color='text.primary'>
          Loading...
        </Typography>
      </Box>
    )

  return (
    <Container component='main' maxWidth='xl'>
      <Box sx={{ flexGrow: 1, margin: "2rem 0" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          {data?.dogs.map((data: Dog) => (
            <Grid xs={2} sm={4} md={4} key={data.id}>
              <DogCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Pagination count={lastPage} page={page} onChange={handleChange} />
    </Container>
  )
}

export default Dashboard
