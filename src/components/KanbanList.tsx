import { Box, TextField, Typography, ClickAwayListener, FormControl } from "@mui/material";
import { useState } from "react";
import { CgAddR } from "react-icons/cg";
import NewCardDialog from "./CardDialog";
import { CardType } from "../types";
import ListOptions from "./ListOptions";
import DraggableCard from "./DraggableCard";

const KanbanList = ({ title, handleListDelete }: { title: string; handleListDelete: () => void }) => {
  const [ cards, setCards ] = useState<CardType[]>([]);
  const [ newCardOpen, setNewCardOpen ] = useState(false);
  const [ cardDetails, setCardDetails ] = useState({
    title: '',
    description: '',
    status: ''
  });
  
  const handleAddCard = () => {
    setCards([...cards, cardDetails]);
    setCardDetails({
      title: '',
      description: '',
      status: ''
    });
    setNewCardOpen(false);
  };
  
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
      <Box sx={{ display: "flex",  mt: 1, flexDirection: 'column' }}>
        { cards.map((card, index) => (
          <DraggableCard key={index} index={index} cardDetails={card} />
        ))}
        </Box>
      { !newCardOpen && (
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
      )}
      <Box>
      { newCardOpen && (
          <ClickAwayListener onClickAway={() => setNewCardOpen(false)}>
            <FormControl component="form" onSubmit={handleAddCard} sx={{ width: '100%'}}>
              <TextField 
                onChange={(e) => {
                  setCardDetails({...cardDetails, title: e.target.value});
                }}
                autoFocus
                placeholder="Enter Card Title..."
                sx={{ mt: 2, mx: 2, width: '90%' }}
              />
            </FormControl>
          </ClickAwayListener>
        )}
      </Box>
      {/* <NewCardDialog open={newCardOpen} setOpen={setNewCardOpen} setCardDetails={setCardDetails} cardDetails={cardDetails} setCards={setCards} cards={cards}/> */}
    </Box>
  );
};

export default KanbanList;
