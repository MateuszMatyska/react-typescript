import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./LoginPageStyles.css";

const LoginPage: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const clickIn = () => {
        if (login !== "" && password !== "") {
            localStorage.setItem("token", `${login}`);
        }
    };

    const onChangeLogin = (event: any) => {
        setLogin(event.target.value);
    };

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className="inputs-wrapper">
                <div className="input-section">
                    <Input type="text" value={login} onChange={onChangeLogin} placeholder="Login" />
                </div>
                <div className="input-section">
                    <Input type="password" value={password} onChange={onChangePassword} placeholder="Password" />
                </div>
                <div className="input-section">
                    <Button text="Login" onClick={clickIn} variant="primary" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
