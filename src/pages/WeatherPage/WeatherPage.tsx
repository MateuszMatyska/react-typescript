import React from 'react';
import WeatherTable from 'pages/WeatherPage/WeatherTable/WeatherTable';
import './style.css'

const WeatherPage: React.FC<any> = (props: any) => {
    return <div className="weatherPage__container">
        <div className="weatherPage__title">
            <h1 className="weatherPage__title--text">Weather Table</h1>
        </div>
        <div className="weatherPage__table">
            <WeatherTable />
        </div>
    </div>
}

export default WeatherPage;