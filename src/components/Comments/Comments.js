import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitComments();
};

  const submitComments = () => {
    dispatch({
      type: 'SUBMIT_COMMENTS',
      payload: comments
    })
    history.push('/review')
  }
  // Updates comments state with entered value upon submission 

  return(
    <form onSubmit = {handleSubmit}>
      <p>Any comments you would like to add?</p>
      <TextField
        margin='dense'
        multiline={true}
        fullWidth
        value = {comments}
        onChange = {(event) => setComments(event.target.value)}>
        </TextField>
        <Button type = 'submit' variant = 'contained'>NEXT</Button>
    </form>
  );
  // HTML to be displayed at /comments route
};


export default Comments;