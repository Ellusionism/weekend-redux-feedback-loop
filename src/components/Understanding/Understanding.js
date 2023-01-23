import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitUnderstanding();
};

  const submitUnderstanding = () => {
    dispatch({
      type: 'SUBMIT_UNDERSTANDING',
      payload: understanding
    })
    history.push('/support')
  }
  // Updates understanding state with entered value upon submission 

  return(
    <form onSubmit = {handleSubmit}>
      <p>How well are you understanding today's content?</p>
      <FormControl fullWidth>
        <InputLabel>Understanding</InputLabel>
        <Select
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
          required={true}
          margin='dense'
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Button type = 'submit' variant = 'contained'>NEXT</Button>
    </form>
  );
  // HTML to be displayed at /understanding route
};

export default Understanding;