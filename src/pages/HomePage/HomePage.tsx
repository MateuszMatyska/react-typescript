import React from 'react';
import Button from '../../components/Button/Button';

const HomePage: React.FC = () =>{
    const click = () => {
        console.log("Klik");
        localStorage.setItem("token","123");
    }
    
    return <div>
        <div className="wrapper">
            <Button text="Login" onClick={click}/>
        </div>
    </div>
}

export default HomePage;