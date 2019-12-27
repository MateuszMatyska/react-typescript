import React from 'react';
import { connect } from 'react-redux';

import {IAppState} from 'store/Store';

const UserComponent: React.FC<any> = (props: any) => {
    return <div>
        <h2>{props.user.FirstName}</h2>
        <h1>{props.user.LastName}</h1>
    </div>
}

const mapStateToPros = (store: IAppState) => {
    return {
        user: store.userState
    }
}

export default connect(mapStateToPros)(UserComponent);