export interface DogMatchedInterface {
  open: boolean
  dogId: string
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
}
