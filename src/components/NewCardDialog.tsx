import { Dialog, DialogTitle } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

const NewCardDialog = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
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

export default NewCardDialog