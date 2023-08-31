import React, { useEffect } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { useMatchDog } from "@hooks/Dogs/useMatchDog"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const MatchDog = () => {
  const [open, setOpen] = React.useState(false)
  const { data, mutate: matchDog, isSuccess } = useMatchDog()

  useEffect(() => {
    if (isSuccess) {
      handleOpen()
    }
  }, [isSuccess])

  const handleDogMatching = () => {
    const test = [
      "VXGFTIcBOvEgQ5OCx40W",
      "V3GFTIcBOvEgQ5OCx40W",
      "WHGFTIcBOvEgQ5OCx40W",
      "W3GFTIcBOvEgQ5OCx40W",
      "YnGFTIcBOvEgQ5OCx40W",
      "Y3GFTIcBOvEgQ5OCx40W",
      "aHGFTIcBOvEgQ5OCx40W",
      "aXGFTIcBOvEgQ5OCx40W",
      "bHGFTIcBOvEgQ5OCx40W",
      "bnGFTIcBOvEgQ5OCx40W",
      "cXGFTIcBOvEgQ5OCx40W",
      "c3GFTIcBOvEgQ5OCx40W",
      "dHGFTIcBOvEgQ5OCx40W",
      "dnGFTIcBOvEgQ5OCx40W",
      "eHGFTIcBOvEgQ5OCx40W",
      "h3GFTIcBOvEgQ5OCx40W",
      "iHGFTIcBOvEgQ5OCx40W",
      "jnGFTIcBOvEgQ5OCx40W",
      "j3GFTIcBOvEgQ5OCx40W",
      "kHGFTIcBOvEgQ5OCx40W",
      "rXGFTIcBOvEgQ5OCx40W",
      "uHGFTIcBOvEgQ5OCx40W",
      "vnGFTIcBOvEgQ5OCx40W",
      "yHGFTIcBOvEgQ5OCx40W",
      "0XGFTIcBOvEgQ5OCx40W",
    ]
    matchDog(test)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant='contained' onClick={handleDogMatching}>
        Match with your dog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"It's a Match"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending anonymous location
            data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MatchDog
