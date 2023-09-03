import React from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { useFetchDogsInformation } from "@hooks/Dogs/useFetchDogsInformation"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import { Dog } from "@api/fetchDogsInformation/DogInterface.interface"
import { DogMatchedInterface } from "./DogMatchedInterface.interface"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DogMatched = ({
  open,
  dogId,
  handleClose,
}: DogMatchedInterface): JSX.Element | null => {
  const { data, isSuccess } = useFetchDogsInformation(true, [dogId])

  if (data) {
    const { name, age, breed, zip_code: zipCode, img }: Dog = data[0] as Dog
    return (
      <Dialog
        open={open && isSuccess}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"It's a Match!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <CardMedia
              component='img'
              sx={{ height: 400, marginBottom: 2.5 }}
              image={img}
              alt={breed}
            />
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
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  }
  return null
}

export default DogMatched
