import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(0);

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

  return(
    <form onSubmit = {handleSubmit}>
      <p>How well are you understanding today's content?</p>
      <input
        value = {understanding}
        type = 'number'
        min = '1'
        max = '5'
        onChange = {(event) => setUnderstanding(event.target.value)}
        required />
        <button type = 'submit'>NEXT</button>
    </form>
  );
};

export default Understanding;