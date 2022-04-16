import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import Logout from "./Logout"
import {useNavigate} from "react-router-dom"

function Landing () {
    const {loginWithRedirect, user } = useAuth0()
console.log("useAuth0",useAuth0())
    const navigate = useNavigate()

    if (!user){           
        return (
            <div>
                <button onClick={() => loginWithRedirect()}>
                    Login
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <header>
                  <Logout />  
                </header>
                <button onClick={() => navigate(`/users/${user.nickname}`)}>
                    See Todos
                </button>
            </div>
        )
    }

}

export default Landing