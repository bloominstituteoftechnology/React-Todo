import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Logout = () => {
    const{logout} = useAuth0()
  return (
    <button onClick={() => logout()}>Logout</button>
  )
}

export default Logout