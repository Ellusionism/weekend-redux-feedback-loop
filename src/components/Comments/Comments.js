import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
      <input
        value = {comments}
        type = 'text'
        onChange = {(event) => setComments(event.target.value)}/>
        <button type = 'submit'>NEXT</button>
    </form>
  );
  // HTML to be displayed at /comments route
};


export default Comments;