import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/Store";
import { SetUserData } from "store/actions/UserActions";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const UserSettings: React.FC<any> = (props: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

    useEffect(() => {
        if(props.user) {
            if(props.user.FirstName) {
                setFirstName(props.user.FirstName);
            }
            if(props.user.LastName) {
                setLastName(props.user.LastName);
            }
            if(props.user.Email) {
                setEmail(props.user.Email);
            }
        }
    }, [props.user]);

  const onChangeFirstName = (event: any) => {
     setFirstName(event.target.value);
  }

  const onChangeLastName = (event: any) => {
    setLastName(event.target.value);
 }

 const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
 }

  return (
    <div className="userSetting-wrapper">
      <div>
        <Input
          type="text"
          value={firstName}
          onChange={onChangeFirstName}
          placeholder="First Name"
        />
      </div>
      <div>
        <Input
          type="text"
          value={lastName}
          onChange={onChangeLastName}
          placeholder="Last Name"
        />
      </div>
      <div>
        <Input
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="E-mail Address"
        />
      </div>
      <div>
          <Button text="Set User" onClick={() => {
              props.setUser(firstName,lastName,email);
          }} variant="primary" />
      </div>
    </div>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    user: store.userState.User
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (FirstName: string, LastName: string, Email: string) => {
      dispatch(SetUserData(FirstName, LastName, Email));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
