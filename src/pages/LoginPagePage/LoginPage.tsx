import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from 'components/Input/Input';
import { connect } from 'react-redux';
import { LoginUser } from 'store/actions/UserActions';
import {IAppState} from 'store/Store';
import "./LoginPageStyles.css";
import { Redirect } from 'react-router-dom'

const LoginPage: React.FC<any> = (props: any) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    const clickIn = () => {
        if (login !== "" && password !== "") {
            props.loginAction(login,password);
            setIsLoginClicked(true);
        }
    };

    const onChangeLogin = (event: any) => {
        setLogin(event.target.value);
        if(isLoginClicked) {
            setIsLoginClicked(false);
        }
    };

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
        if(isLoginClicked) {
            setIsLoginClicked(false);
        }
    };

    const RenderWrongLogin = () => {
        if(isLoginClicked && !props.loginUser) {
            return <div className="input-section">
                <h3 className="error-text">Nieprawidowy login lub hasło</h3>
            </div>
        }
        else {
            return null;
        }
    }

    if(props.loginUser) {
        return <Redirect to="/" />
    }
    else {
    return (
        <div className="wrapper">
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className={isLoginClicked && !props.loginUser ? "inputs-wrapper inputs-wrapper-error" : "inputs-wrapper"}>
                <div className="input-section">
                    <Input type="text" value={login} onChange={onChangeLogin} placeholder="Login" validationFailed={isLoginClicked && !props.loginUser} />
                </div>
                <div className="input-section">
                    <Input type="password" value={password} onChange={onChangePassword} placeholder="Password" validationFailed={isLoginClicked && !props.loginUser} />
                </div>
                {RenderWrongLogin()}
                <div className="input-section">
                    <Button text="Login" onClick={clickIn} variant="primary" />
                </div>
            </div>
        </div>
    );
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginAction: (login: string, password: string) => {dispatch(LoginUser(login,password))}
    }
}

const mapStateToPros = (store: IAppState) => {
    return {
        loginUser: store.userState.LoginUser
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(LoginPage);