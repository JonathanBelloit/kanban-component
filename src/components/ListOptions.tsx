import { Box, Typography } from '@mui/material';
import { useState } from 'react'
import { MdOutlineMoreHoriz } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const ListOptions = ({ handleListDelete }: { handleListDelete: () => void }) => {
  const [showListOptions, setShowListOptions] = useState(false);

  const listOptions = [
    {
      title: 'Delete List',
      onClick: () => {
        handleListDelete();
        setShowListOptions(false);
      }
    }
  ]
  return (
    <>
      {!showListOptions && <MdOutlineMoreHoriz size={30} onClick={()=>setShowListOptions(!showListOptions)} />}
      {showListOptions && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: 0,
            right: 0,
            backgroundColor: 'white',
            borderRadius: 5,
            border: '1px solid black',
            px: 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IoMdClose size={20} color='red' onClick={()=>setShowListOptions(!showListOptions)} />
          </Box>
          {listOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                cursor: "pointer",
              }}
              onClick={option.onClick}
            >
              <Typography>{option.title}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default ListOptions