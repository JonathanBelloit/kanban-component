import { Box, Typography } from '@mui/material'
import React from 'react'
import { CardType } from '../types'

const DraggableCard = ({ cardDetails, index }: { cardDetails: CardType, index: number }) => {
  return (
    <Box
            key={index}
            draggable
            sx={{
              display: "flex",
              mt: 1,
              flexGrow: 1,
              backgroundColor: '#d9d9d9',
              borderRadius: 5,
              p: 2,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography>{cardDetails.title}</Typography>
          </Box>
  )
}

export default DraggableCard