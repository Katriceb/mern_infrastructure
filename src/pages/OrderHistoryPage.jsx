import React from 'react'
import {checkToken} from '../utilities/users-service';

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default OrderHistoryPage