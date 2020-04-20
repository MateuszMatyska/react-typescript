import React from 'react';
import {connect} from 'react-redux';
import { IAppState } from 'store/Store';
import UserPanel from 'components/NavMenu/UserPanel/UserPanel';
import Menu from 'components/NavMenu/Menu/Menu';
import './NavMenuStyle.css';

const NavMenu: React.FC<any> = (props: any) => {
    if(props.user) {
        console.log(`render: ${props.user}`)
        return <div className='navbarMenu'>
            <div className="menu-wrapper">
                <Menu />
            </div>
            <div className="userPanel-wrapper">
                <UserPanel />
            </div>
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