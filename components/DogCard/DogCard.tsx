import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const DogCard = ({ img, breed, name, zip_code: zipCode }: Dog): JSX.Element => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component='img' sx={{ height: 250 }} image={img} alt={breed} />
    <CardContent>
      <Typography variant='body1' color='text.primary'>
        Name:{" "}
        <Typography variant='body2' color='text.secondary' component={"span"}>
          {name}
        </Typography>
      </Typography>
      <Typography variant='body1' color='text.primary'>
        Breed:{" "}
        <Typography variant='body2' color='text.secondary' component={"span"}>
          {breed}
        </Typography>
      </Typography>
      <Typography variant='body1' color='text.primary'>
        Zip code:{" "}
        <Typography variant='body2' color='text.secondary' component={"span"}>
          {zipCode}
        </Typography>
      </Typography>
    </CardContent>
  </Card>
)

export default DogCard
