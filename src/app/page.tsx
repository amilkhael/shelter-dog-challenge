"use client"

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useLogin } from "@hooks/Session/useLogIn"
import { User } from "@services/login/User.type"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { CardMedia } from "@mui/material"

export default function LogIn(): JSX.Element {
  const { mutate: login, isSuccess } = useLogin()
  const router = useRouter()

  useEffect((): void => {
    if (isSuccess) {
      router.push("dashboard")
    }
  }, [isSuccess])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data) {
      const user: User = {
        email: data.get("email")?.toString(),
        name: data.get("name")?.toString(),
      }

      login(user)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <CardMedia
          component='img'
          image='https://firebasestorage.googleapis.com/v0/b/book-51d1c.appspot.com/o/dogs.png?alt=media&token=3ec8a36c-ba06-44f3-9708-3022a916ec64'
          alt={"Login image"}
        />
        <Typography component='h1' variant='h5'>
          Log in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='name'
            label='Name'
            type='text'
            id='name'
            autoComplete='name'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
