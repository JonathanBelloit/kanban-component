import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CardType } from "../types";
import CardDialog from "./CardDialog";

const DraggableCard = ({
  cardDetails,
  index,
}: {
  cardDetails: CardType;
  index: number;
}) => {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <>
      <Box
        key={index}
        draggable
        sx={{
          display: "flex",
          mt: 1,
          flexGrow: 1,
          backgroundColor: "#d9d9d9",
          borderRadius: 5,
          p: 2,
          "&:hover": { cursor: "pointer" },
        }}
        onClick={() => {
          setCardOpen(true);
        }}
      >
        <Typography>{cardDetails.title}</Typography>
      </Box>
      <CardDialog
        open={cardOpen}
        setOpen={setCardOpen}
        cardDetails={cardDetails}
      />

    </>
  );
};

export default DraggableCard;
