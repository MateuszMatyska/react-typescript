import React from 'react';
import {connect} from 'react-redux';
import {IAppState} from 'store/Store';
import { Link } from 'react-router-dom';

const HomePage: React.FC<any> = (props: any) =>{    
    return <div>
        <div className="wrapper">
            <h1>Dashboard</h1>
            <span>
                Web app allows you check weather edit and delete weather station measure.
            </span>
            <Link to='/weather'>Weather Site</Link>
        </div>
    </div>
}

const mapStateToProps = (state: IAppState) => {
    return {
        user: state.userState.LoginUser,
    }
}

export default connect(mapStateToProps)(HomePage);