import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton';
import AdminHome from './AdminHome';

const App = () => {
    const { isLoading } = useAuth0()
    if ( isLoading ) return <div>Loading ... </div>
    return (
        <>
            <LoginButton />
            <AdminHome />
        </>
    )
}

export default App