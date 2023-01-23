import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFeeling();
};

  const submitFeeling = () => {
    dispatch({
      type: 'SUBMIT_FEELING',
      payload: feeling
    })
    history.push('/understanding')
  }
  // Updates feeling state with entered value upon submission 

  return(
    <form onSubmit = {handleSubmit}>
      <p>How are you feeling today?</p>
      <FormControl fullWidth>
        <InputLabel>Feeling</InputLabel>
        <Select
          value={feeling}
          margin='normal'
          onChange={(event) => setFeeling(event.target.value)}
          required={true}
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
  // HTML to be displayed at /feeling route
};

export default Feeling;