import React, { useEffect } from "react"
import Button from "@mui/material/Button"
import { useMatchDog } from "@hooks/Dogs/useMatchDog"
import DogMatched from "@components/DogMatched/DogMatched"
import { MatchingDogResponse } from "@api/matchingDogs/MatchingDogResponse.interface"

const MatchDog = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const { data, mutate: matchDog, isSuccess } = useMatchDog()
  const dogId = data as MatchingDogResponse

  useEffect(() => {
    if (isSuccess) {
      handleOpen()
    }
  }, [isSuccess])

  //TODO: Remove variable test
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
      {data && <DogMatched open={open} dogId={dogId.match} handleClose={handleClose} />}
    </>
  )
}

export default MatchDog
