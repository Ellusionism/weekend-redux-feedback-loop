import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function Review() {

  const history = useHistory();
  
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);
  // Grabs values from state

  const handleSubmit  = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling,
        understanding,
        support,
        comments
      }
    }).then((res) => {
      history.push('/submitted');
    }).catch((err) => {
      console.error('Error in Review POST: ', err);
    })
  };
  // Packages all values together and sends them to the router

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feeling</TableCell>
            <TableCell>Understanding</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{feeling}</TableCell>
            <TableCell>{understanding}</TableCell>
            <TableCell>{support}</TableCell>
            <TableCell>{comments}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button 
      onClick = {handleSubmit}
      variant = 'contained'
      margin='dense'>Submit Feedback</Button>
    </>
  )
  // HTML to be displayed at /review route
}

export default Review;