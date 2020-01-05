import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from 'store/Store';

const UserPanel: React.FC<any> = (props: any) => {
   if(props.user) {
        return <div>
            <h6>{props.user.Login}</h6>
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