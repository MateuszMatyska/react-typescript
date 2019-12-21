import React from 'react';
import { connect } from 'react-redux';

import {IAppState} from 'store/Store';

const UserComponent: React.FC<any> = (props: any) => {
    return <div>
        <h1>{props.user}</h1>
    </div>
}

const mapStateToPros = (store: IAppState) => {
    return {
        user: store.userState.name
    }
}

export default connect(mapStateToPros)(UserComponent);