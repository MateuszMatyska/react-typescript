import React from 'react';
import UserComponent from 'components/UserComponent';

const HomePage: React.FC = () =>{    
    return <div>
        <div className="wrapper">
            <h1>Dashboard</h1>
            <UserComponent />
        </div>
    </div>
}

export default HomePage;