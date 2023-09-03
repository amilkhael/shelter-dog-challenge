import Box from "@mui/material/Box"
import Image from "next/image"
import Typography from "@mui/material/Typography"

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
    <Image
      src='/static/loading/corgi-excited.GIF'
      width={220}
      height={178}
      alt='Picture of the author'
    />
    <Typography variant='body1' color='text.primary'>
      Loading...
    </Typography>
  </Box>
)

export default Loading
