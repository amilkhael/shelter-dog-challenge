import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import { DogCard } from "./DogCardInterface.interface"

const DogCard = ({
  img,
  breed,
  name,
  zip_code: zipCode,
  age,
  handleDogSelection,
  dogSelection,
  id,
}: DogCard): JSX.Element => (
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
        Age:{" "}
        <Typography variant='body2' color='text.secondary' component={"span"}>
          {age}
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
    <CardActions disableSpacing>
      <FormControlLabel
        control={
          <Checkbox
            checked={dogSelection.includes(id)}
            onChange={(event): void => handleDogSelection(event, id)}
            inputProps={{ "aria-label": "controlled" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        }
        label='Select this dog'
      />
    </CardActions>
  </Card>
)

export default DogCard
