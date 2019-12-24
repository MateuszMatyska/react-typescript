import React from 'react';
import UserComponent from 'components/UserComponent';
import SetUserComponent from 'components/SetUserComponent';

const HomePage: React.FC = () =>{    
    return <div>
        <div className="wrapper">
            <h1>Dashboard</h1>
            <UserComponent />
            <h1>----------</h1>
            <SetUserComponent />
        </div>
    </div>
}

export default HomePage;