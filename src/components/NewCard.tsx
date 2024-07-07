import { Dialog, DialogTitle } from '@mui/material'

const NewCard = ({ open, setOpen }: { open: boolean }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}>
      <DialogTitle>
        Add New Card
      </DialogTitle>
    </Dialog>
  )
}

export default NewCard