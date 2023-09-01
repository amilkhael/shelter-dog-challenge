import React, { useEffect } from "react"
import Button from "@mui/material/Button"
import { useMatchDog } from "@hooks/Dogs/useMatchDog"
import DogMatched from "@components/DogMatched/DogMatched"
import { MatchingDogResponse } from "@api/matchingDogs/MatchingDogResponse.interface"
import useSelectedDogsContext from "@hooks/Context/useSelectedDogsContext"

const MatchDog = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const { data, mutate: matchDog, isSuccess } = useMatchDog()
  const { dogSelection } = useSelectedDogsContext()
  const dogId = data as MatchingDogResponse

  useEffect(() => {
    if (isSuccess) {
      handleOpen()
    }
  }, [isSuccess])

  const handleDogMatching = () => {
    matchDog(dogSelection)
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
