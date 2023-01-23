import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function Submitted() {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: 'SET_FEELING', payload: 0});
    dispatch({ type: 'SET_UNDERSTANDING', payload: 0});
    dispatch({ type: 'SET_SUPPORT', payload: 0});
    dispatch({ type: 'SET_COMMENTS', payload: ''});
    history.push('/');
  };
  // Resets state and returns the user to the homepage

  return (
    <>
      <h2>Feedback successfully submitted!</h2>
      <Button onClick = {handleClick} variant = 'contained'>Home</Button>
    </>
  );
  // HTML to be displayed at /submitted route

}

export default Submitted;