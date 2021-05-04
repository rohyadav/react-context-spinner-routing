import React, { useEffect, useState } from 'react';
import { useGlobalSpinnerActionsContext } from '../Global/Spinner/GlobalSpinnerContext';

const Comments = props => {
  const [comments, setComments] = useState([])
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  useEffect(() => {
    (async () => {
      setGlobalSpinner(true)
      const result = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await result.json()
      setComments(data)
      setGlobalSpinner(false)
    })()
  }, [setGlobalSpinner])

  return (
    <div>
    {console.log('random')}
    <button type="button" onClick={() => props.history.goBack()}>
        Go back
      </button>
      <hr/><br/>

      {comments.map(comment => {
        const {name, body, id} = comment
        return (
          <div key={id}>
            <p style={{fontWeight: 'bold'}}>{name}</p>
            <p> {body}</p>
            
          </div>
        )
      })}
    </div>
  )
}

export default Comments