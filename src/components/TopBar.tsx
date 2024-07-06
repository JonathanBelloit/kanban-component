import { Box, Typography } from '@mui/material'
import React from 'react'

const TopBar = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', justifyContent: 'center', backgroundColor: '#d9d9d9'}}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Top Bar will go here
      </Typography>
    </Box>
  )
}

export default TopBar