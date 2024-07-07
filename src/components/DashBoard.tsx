import { useState } from 'react'
import KanbanList from './KanbanList'
import { Grid, Typography, Box, TextField, FormControl } from '@mui/material'


const DashBoard = () => {
  const [lists, setLists] = useState<string[]>([]);
  const [listTitle, setListTitle] = useState('')
  const [newListTitle, setNewListTitle] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLists([...lists, listTitle]);
    setListTitle('');
    setNewListTitle(false);
  };
  console.log(lists)

  const handleListDelete = (index: number) => {
    const newLists = lists.filter((_list, i) => i !== index);
    setLists(newLists);
  };

  return (
    <Grid container spacing={2} >
        { lists.map((list, index) => (
      <Grid item xs={12} md={3} lg={3} sx={{ mt: 1, mx: 1 }}>
          <KanbanList title={list} key={index} handleListDelete={() => handleListDelete(index)} />
      </Grid>
        ))}
      <Grid item xs={12} md={3} lg={3} sx={{ mt: 1, mx: 1 }}>
      { !newListTitle ? (
      <Box
        sx={{
          transition: "ease-in-out 400ms",
          borderRadius: 5,
          p: 2,
          "&:hover": { cursor: "pointer", backgroundColor: "#d9d9d9" },
        }}
        onClick={() => setNewListTitle(true)} 
        >
        <Typography textAlign={'center'}>New List</Typography>
      </Box>
      ):(
        <FormControl component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            value={listTitle}
            autoFocus
            onChange={(e) => {
              setListTitle(e.target.value);
            }}
          />
        </FormControl>
      )}
      </Grid>
    </Grid>
  )
}

export default DashBoard