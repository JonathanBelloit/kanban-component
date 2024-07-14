import { Box, Typography } from '@mui/material'
import React from 'react'
import LogoutBtn from './auth/LogoutBtn'

const TopBar = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', justifyContent: 'center', backgroundColor: '#d9d9d9'}}>
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Top Bar will go here
        </Typography>
      </Box>
      <LogoutBtn />
    </Box>
  )
}

export default TopBar