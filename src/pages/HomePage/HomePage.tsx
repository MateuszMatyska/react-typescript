import React from 'react';
import UserComponent from 'components/UserComponent';
import SetUserComponent from 'components/SetUserComponent';
import {connect} from 'react-redux';
import {IAppState} from 'store/Store';

const HomePage: React.FC<any> = (props: any) =>{    
    return <div>
        <div className="wrapper">
            <h1>Dashboard</h1>
            <UserComponent />
            <h1>----------</h1>
            <SetUserComponent />
        </div>
    </div>
}

const mapStateToProps = (state: IAppState) => {
    return {
        user: state.userState.LoginUser,
    }
}

export default connect(mapStateToProps)(HomePage);