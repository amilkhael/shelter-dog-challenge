export interface DogMatchedInterface {
  open: boolean
  dogId: string
  handleClose: (event: unknown, reason: "backdropClick" | "escapeKeyDown") => void
}
