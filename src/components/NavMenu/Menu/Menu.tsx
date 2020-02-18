import React from 'react';
import './MenuStyle.css';
import { Link } from 'react-router-dom';

const Menu: React.FC<any> = (props: any) => {
    const linkArray = [
        {name: 'Home', link: '/' },
        {name: 'Site', link: '/inprogress'},
        {name: 'Weather', link: '/weather'}
    ];

    const renderLinks = () => {
        return  linkArray.map((item) => {
           return <Link className="link" to={item.link}>{item.name}</Link>
        });
    }

    return <div className="menu">
        {renderLinks()}
    </div>
}

export default Menu;