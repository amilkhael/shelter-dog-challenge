import { useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { useRouter } from "next/navigation"

const ErrorDialog = ({ isError }: { isError: boolean }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(isError)
  const router = useRouter()

  const handleClose = () => {
    setOpen(false)
    router.push("/")
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{"Access expired"}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Sorry for the inconvenience. Your access was expired. Please login again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Go to Login</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorDialog
