import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState(0);

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

  return(
    <form onSubmit = {handleSubmit}>
      <p>How are you feeling today?</p>
      <input
        value = {feeling}
        type = 'number'
        min = '1'
        max = '5'
        onChange = {(event) => setFeeling(event.target.value)}
        required />
        <button type = 'submit'>NEXT</button>
    </form>
  );
};

export default Feeling;