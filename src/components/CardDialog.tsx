import { Dialog, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CardType } from "../types";

const CardDialog = ({
  open,
  setOpen,
  cardDetails,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardDetails: CardType;
}) => {


  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      fullScreen
      sx={{ mx: 40, my: 10 }}
      
    >
      <DialogTitle>{cardDetails.title}</DialogTitle>
    </Dialog>
  );
};

export default CardDialog;
