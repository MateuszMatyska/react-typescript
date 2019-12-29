import React from 'react';
import { connect } from 'react-redux';

import {IAppState} from 'store/Store';

const UserComponent: React.FC<any> = (props: any) => {
    return <div>
        <h2>{props.user ? props.user.FirstName : "" }</h2>
        <h1>{props.user ? props.user.LastName : ""}</h1>
        <h3>{props.user ? props.user.Email : ""}</h3>
    </div>
}

const mapStateToPros = (store: IAppState) => {
    return {
        user: store.userState.User
    }
}

export default connect(mapStateToPros)(UserComponent);