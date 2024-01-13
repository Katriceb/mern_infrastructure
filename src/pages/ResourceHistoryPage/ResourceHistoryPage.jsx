import React from 'react'
import {checkToken} from '../utilities/users-service';

function ResourceHistoryPage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>ResourceHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default ResourceHistoryPage