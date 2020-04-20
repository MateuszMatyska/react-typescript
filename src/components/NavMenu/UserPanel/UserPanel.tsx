import React from "react";
import { connect } from "react-redux";
import { IAppState } from "store/Store";
import "./UserPanelStyle.css";
import { withRouter } from 'react-router-dom';
import { LogOutUser } from 'store/actions/UserActions';

const UserPanel: React.FC<any> = (props: any) => {
  const logout = () => {
    props.logoutUser();
    props.history.push("/login");
  }

  const redirectTo = (path: string) => {
    props.history.push(path);
  }
  
  if (props.user) {
    return (
      <div className="userPanel">
        <label className="dropdown">
        <div className="dd-button">{props.user.Login}</div>
          <input type="checkbox" className="dd-input" id="test" />
          <ul className="dd-menu">
            <li onClick={() => {redirectTo("/usersettings")}}>User Settings</li>
            <li className="divider"></li>
            <li onClick={() => {logout()}}>
              Logout
            </li>
          </ul>
        </label>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: IAppState) => {
  return {
    user: state.userState.LoginUser
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser: () => {dispatch(LogOutUser())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPanel));
