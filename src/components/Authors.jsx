import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import { API_author } from '../Global';
import CardAuthor from './CardAuthor';

function Authors() {
    const [authors,setAuthors] = useState([])

    useEffect(()=>{
        axios.get(`${API_author}`)
        .then((response)=>setAuthors(response.data))
    },[])

console.log("Author list is ", authors)
  return (
    <Box sx={{ minWidth: 275 }}>

        {authors.map((author)=>(
          <CardAuthor author={author}/>
        ))}
   
  </Box>
  )
}

export default Authors