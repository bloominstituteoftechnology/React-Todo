import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Dashboard = () => {
    const { user } = useAuth0();

    return (
        <div>
            <h2>Dashboard</h2>
            <JSONPretty data={user} />
        </div>
    )
}

export default Dashboard