import React from 'react';
import Button from '../../components/Button/Button';

const LoginPage: React.FC = () =>{
    const clickIn = () => {
        localStorage.setItem("token","123");
    }

    const clickOut = () => {
        localStorage.removeItem("token");
    }
    
    return <div>
        <div className="wrapper">
            <Button text="Login" onClick={clickIn}/>
            <Button text="Logout" onClick={clickOut}/>
        </div>
    </div>
}

export default LoginPage;