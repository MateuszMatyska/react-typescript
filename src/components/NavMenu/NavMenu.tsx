import React from 'react';
import {connect} from 'react-redux';
import { IAppState } from 'store/Store';
import UserPanel from 'components/NavMenu/UserPanel/UserPanel';

const NavMenu: React.FC<any> = (props: any) => {
    if(props.user) {
        console.log(`render: ${props.user}`)
        return <div>
            <UserPanel />
        </div>
    }
    else {
        return null;
    }
} 

const mapStateToProps = (state: IAppState) => {
    return { 
        user: state.userState.LoginUser
    }
 }
 
 export default connect(mapStateToProps,null)(NavMenu);