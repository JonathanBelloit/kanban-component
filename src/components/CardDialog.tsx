import { Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CardType } from "../types";

const CardDialog = ({
  open,
  setOpen,
  cardDetails,
  listTitle,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardDetails: CardType;
  listTitle: string;
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
      <DialogTitle>
        <Typography variant="h4">{cardDetails.title}</Typography>
      </DialogTitle>
      <Box sx={{ ml: 5 }}>
        <Typography>In list: &nbsp;{listTitle}</Typography>
      </Box>
    </Dialog>
  );
};

export default CardDialog;
