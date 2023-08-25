"use client"

import { useSearchingDogs } from "@hooks/Dogs/useSearchingDogs"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import DogCard from "@components/DogCard/DogCard"
import Typography from "@mui/material/Typography"

const Dashboard = () => {
  const params = {
    ageMax: 1,
  }
  const { isLoading, data } = useSearchingDogs(true, params)
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
          {data?.map((data) => (
            <Grid xs={2} sm={4} md={4} key={data.id}>
              <DogCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Dashboard
