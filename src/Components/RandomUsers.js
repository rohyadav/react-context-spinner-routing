import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useGlobalSpinnerActionsContext } from '../Global/Spinner/GlobalSpinnerContext';

const RandomUsers = props => {
  const [users, setUsers] = useState([])
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  let history = useHistory();

  useEffect(() => {
    (async () => {
      setGlobalSpinner(true)
      const result = await fetch('https://jsonplaceholder.typicode.com/Users')
      const data = await result.json()
      setUsers(data)
      setGlobalSpinner(false)
    })()
  }, [setGlobalSpinner])

  const handleClick =()=>{
    console.log('click!')
    history.push("/comments");
    
  }

  return (
    <div>
    {console.log('random-users')}
      {users.map(user => {
        const {name, body, id} = user
        return (
          <div key={id}>
            <p style={{fontWeight: 'bold'}}>{name}</p>
            <p> {body}</p>
            
          </div>
        )
      })}
      
      <hr/><br/>
      <button onClick={handleClick}>Next Page</button>
    </div>
  )
}

export default RandomUsers