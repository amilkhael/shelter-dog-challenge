import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { CardMedia } from "@mui/material"

const Loading = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <CardMedia
      component='img'
      sx={{ width: 220 }}
      image='https://firebasestorage.googleapis.com/v0/b/book-51d1c.appspot.com/o/corgi-excited.gif?alt=media&token=d925d09b-3f30-4faf-b823-5112708dc913'
      alt='Loading image'
    />
    <Typography variant='body1' color='text.primary'>
      Loading...
    </Typography>
  </Box>
)

export default Loading
