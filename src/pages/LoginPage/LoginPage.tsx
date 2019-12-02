import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const LoginPage: React.FC = () =>{
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const clickIn = () => {
        localStorage.setItem("token","123");
    }

    const clickOut = () => {
        localStorage.removeItem("token");
    }

    const onChangeLogin = (event: any) => {
        setLogin(event.target.value);
    }

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    }
    
    return <div>
        <div className="wrapper">
            <Input type="text" value={login} onChange={onChangeLogin} />
            <Input type="text" value={password} onChange={onChangePassword} />
            {login}
            {password}
            <Button text="Login" onClick={clickIn}/>
            <Button text="Logout" onClick={clickOut}/>
        </div>
    </div>
}

export default LoginPage;