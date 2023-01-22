import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState(0);

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
      <input
        value = {support}
        type = 'number'
        min = '1'
        max = '5'
        onChange = {(event) => setSupport(event.target.value)}
        required />
        <button type = 'submit'>NEXT</button>
    </form>
  );
  // HTML to be displayed at /support route
};

export default Support;