import { useState } from 'react'
import KanbanList from './KanbanList'
import { Grid, Typography, Box, TextField, FormControl } from '@mui/material'
import { CgAddR } from 'react-icons/cg';


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
    <Grid container spacing={1} >
        { lists.map((list, index) => (
      <Grid item xs={12} md={2.5} lg={2.5} sx={{ mt: 1, mx: 1 }}>
          <KanbanList title={list} key={index} handleListDelete={() => handleListDelete(index)} />
      </Grid>
        ))}
      <Grid item xs={12} md={2.5} lg={2.5} sx={{ mt: 1, mx: 1 }}>
      { !newListTitle ? (
      <Box
        sx={{
          display: 'flex',
          transition: "ease-in-out 400ms",
          borderRadius: 5,
          alignItems: 'center',
          justifyContent:'center',
          gap: 2,
          p: 2,
          "&:hover": { cursor: "pointer", backgroundColor: "#d9d9d9" },
        }}
        onClick={() => setNewListTitle(true)} 
        >
        <CgAddR size={25} />
        <Typography variant='h5' textAlign={'center'}>New List</Typography>
      </Box>
      ):(
        <FormControl component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
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