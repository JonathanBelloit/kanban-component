import { Dialog, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CardType } from "../types";

const NewCardDialog = ({
  open,
  setOpen,
  cardDetails,
  setCardDetails,
  setCards,
  cards
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardDetails: {
    title: string;
    description: string;
    status: string;
  };
  setCardDetails: Dispatch<SetStateAction<CardType>>;
  setCards: Dispatch<SetStateAction<CardType[]>>;
  cards: CardType[];
}) => {
  const handleAddCard = () => {
    setCards([...cards, cardDetails]);
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle>Add New Card</DialogTitle>
    </Dialog>
  );
};

export default NewCardDialog;
