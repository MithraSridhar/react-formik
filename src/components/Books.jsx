import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import { API_book } from '../Global';
import CardBook from './CardBook';




function Books() {

    const [books,setBooks] = useState([])

    useEffect(()=>{
        axios.get(`${API_book}`)
        .then((response)=>setBooks(response.data))
    },[])

console.log("Books list is ", books)
  return (
    <Box sx={{ minWidth: 275 }}>

        {books.map((book)=>(
          <CardBook book={book}/>
        ))}
   
  </Box>
  )
}
export default Books