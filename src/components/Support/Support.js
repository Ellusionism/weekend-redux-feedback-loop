import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitSupport();
};

  const submitSupport = () => {
    dispatch({
      type: 'SUBMIT_SUPPORT',
      payload: support
    })
    history.push('/comments')
  }
  // Updates support state with entered value upon submission 

  return(
    <form onSubmit = {handleSubmit}>
      <p>How well were you being supported today?</p>
      <FormControl fullWidth>
        <InputLabel>Support</InputLabel>
        <Select
          value={support}
          onChange={(event) => setSupport(event.target.value)}
          required={true}
          margin='normal'
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
  // HTML to be displayed at /support route
};

export default Support;