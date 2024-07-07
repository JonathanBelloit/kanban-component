import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CgAddR } from "react-icons/cg";
import NewCardDialog from "./NewCardDialog";
import { CardType } from "../types";
import { MdOutlineMoreHoriz } from "react-icons/md";
import ListOptions from "./ListOptions";

const KanbanList = ({ title, handleListDelete }: { title: string; handleListDelete: () => void }) => {
  const [ cards, setCards ] = useState<CardType[]>([]);
  const [ newCardOpen, setNewCardOpen ] = useState(false);
  const [ cardDetails, setCardDetails ] = useState({
    title: '',
    description: '',
    status: ''
  });
  
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: 5,
        width: "100%",
        height: "100%",
        p: 1,
      }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <ListOptions handleListDelete={handleListDelete} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 1,
          transition: "ease-in-out 400ms",
          borderRadius: 5,
          p: 2,
          "&:hover": { cursor: "pointer", backgroundColor: "#d9d9d9" },
        }}
        onClick={() => {
          setNewCardOpen(true);
        }}
      >
        <CgAddR size={20} />
        <Typography>Add Card</Typography>
      </Box>
      <NewCardDialog open={newCardOpen} setOpen={setNewCardOpen} setCardDetails={setCardDetails} cardDetails={cardDetails} setCards={setCards} cards={cards}/>
    </Box>
  );
};

export default KanbanList;
