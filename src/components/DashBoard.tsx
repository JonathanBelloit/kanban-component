import { useState } from 'react'
import KanbanList from './KanbanList'
import { Grid, Typography, Box } from '@mui/material'


const DashBoard = () => {
  const [lists, setLists] = useState([]);
  return (
    <Grid container spacing={2} xs={12} lg={3} sx={{ mt: 1, mx: 1 }}>
      <KanbanList />
      
    </Grid>
  )
}

export default DashBoard