import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { fetchDailyData } from '../api/CovApi';

const Chart2 = () => {

    const [ dailyData, setDailyData ] = useState([]);
    
    useEffect(() => {
        fetchDailyData().then(data => {
            setDailyData(data.data);
        });
    }, []);

    console.log(dailyData)

    const LineChartData = (
        <Line 

        />
    );

    return (
        <div>

        </div>
    );
};

export default Chart2;