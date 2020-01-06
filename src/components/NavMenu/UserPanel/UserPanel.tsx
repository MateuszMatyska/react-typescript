import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from 'store/Store';
import './UserPanelStyle.css';

const UserPanel: React.FC<any> = (props: any) => {
   if(props.user) {
        return <div>
            <h2>{props.user.Login}</h2>
        </div>
   }
   else {
       return null
   }
   
} 

const mapStateToProps = (state: IAppState) => {
   return { 
       user: state.userState.LoginUser
   }
}

export default connect(mapStateToProps,null)(UserPanel) ;