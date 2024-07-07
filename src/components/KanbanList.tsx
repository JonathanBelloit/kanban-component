import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CgAddR } from "react-icons/cg";
import NewCard from "./NewCard";

const KanbanList = () => {
  const [ cards, setCards ] = useState([]);
  const [ newCardOpen, setNewCardOpen ] = useState(false);
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: 5,
        width: "100%",
        height: "100%",
        p: 1,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        List Title Here
      </Typography>
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
      <NewCard open={newCardOpen} setOpen={setNewCardOpen} />
    </Box>
  );
};

export default KanbanList;
