import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';




function CardBook({book}) {
  return (
    <Card variant="outlined" sx={{backgroundColor:"#E2BB8C"}}>
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title: {book.title}
        </Typography>
        <Typography variant="h5" component="div">
          Author: {book.author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ISBN: {book.ISBN}
        </Typography>
        <Typography variant="body2">
         Publication Date: {book.publication_date}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton color='secondary' >
             <EditIcon/>
             </IconButton>
             <IconButton color='error' >
              <DeleteIcon/>
              </IconButton>
      </CardActions>
    </React.Fragment>
    </Card>
  )
}

export default CardBook