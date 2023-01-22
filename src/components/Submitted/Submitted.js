import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
      <button onClick = {handleClick}>Home</button>
    </>
  );
  // HTML to be displayed at /submitted route

}

export default Submitted;