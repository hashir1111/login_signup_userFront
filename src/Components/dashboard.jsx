import React from 'react';
import Userfront from "@userfront/react";
import { useNavigate } from 'react-router-dom';

Userfront.init("rbv5qpjn");

const LogoutButton = Userfront.build({
    toolId: "llklloa"
});

const Dashboard = () => {
    const navigate = useNavigate();


    if (!Userfront.accessToken()) {
        navigate('/login');
        return null;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <LogoutButton />
        </div>
    );
}

export default Dashboard;
