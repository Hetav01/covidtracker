import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { worldData } from "../api/CovApi";
import "../style/chart1.css";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from '../api/CovApi';

const Chart = ({ countryData, selectedCountry }) => {

    const [ worldsData, setWorldsData ] = useState({});
    const [ confirmed, setConfirmed ] = useState({});
    const [ deaths, setDeaths ] = useState({});
    const [ recovered, setRecovered ] = useState({});

    
    const [ dailyData, setDailyData ] = useState([]);
    const [ totalConfirmed, setTotalConfirmed ] = useState([]);
    const [ mainlandChina, setMainlandChina ] = useState([]);
    const [ reportDate, setReportDate ] = useState([]);

    const countryConfirmed = countryData.status? countryData.data.confirmed.value : confirmed;
    const countryDeaths = countryData.status? countryData.data.deaths.value: deaths;
    const countryRecovered = countryData.status? countryData.data.recovered.value: recovered;

    useEffect(() => {
        worldData().then(data => {
            setWorldsData(data.data);
            setConfirmed(data.data.confirmed);
            setDeaths(data.data.deaths);
            setRecovered(data.data.recovered);
        });        
        fetchDailyData().then(data => {
            setDailyData(data.data);
            setTotalConfirmed(data.data.map((dayData) => dayData.totalConfirmed));
            setMainlandChina(data.data.map((dayData) => dayData.mainlandChina));
            setReportDate(data.data.map((repoDate) => repoDate.reportDate))
        });
    }, []);


    const LineChartData = (
        <Line 
            data= {{
                labels: reportDate,
                datasets: [{
                    data: totalConfirmed,
                    label: "Total Confirmed Cases",
                    borderColor: "#f54cba",
                    fill: false,
                    borderRadius: 0.5,
                    tension: 0.1,
                    indexAxis: "x",
                },
                {
                    data: mainlandChina,
                    label: "Total Confirmed Cases in China",
                    borderColor: "#fff",
                    fill: false,
                    tension: 0.1,
                    indexAxis: "x",
                }
                ],
            }}
            options={{
                title: {
                    text: "Total"
                }
            }}
        />
    );


    const worldBarChart = (
        <Bar 
            data= {{
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [{
                    label: "Cases in the world",
                    data: [ confirmed.value, deaths.value, recovered.value ], 
                    backgroundColor: [ "rgba(198, 145, 107, 0.3", "rgba(225, 65, 39, 0.3)", "rgba(255, 255, 255, 0.3)" ],
                    borderColor: [ "rgb(198, 145, 107", "rgb(225, 65, 39)", "rgb(255, 255, 255)" ],
                    borderWidth: 1  
                }]
            }}
            options= {{
                legend: true,
                indexAxis: "y",
                title: { 
                    display: true,  
                    text: "The Census for the World stands as: "
                },
                yAxes: {
                    ticks: {
                        fontColor: "green",
                    }
                }
            }}
        />
    );

    
    
    const countryBarChart = (
        <Bar 
            data={{
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [{
                    label: `Cases in ${selectedCountry}`,
                    data: [ countryConfirmed, countryDeaths, countryRecovered ],
                    backgroundColor: [ "rgba(198, 145, 107, 0.3", "rgba(225, 65, 39, 0.3)", "rgba(255, 255, 255, 0.3)" ],
                    borderColor: [ "rgb(198, 145, 107", "rgb(225, 65, 39)", "rgb(255, 255, 255)" ],
                    borderWidth: 1
                }]
            }}
            options={{
                indexAxis: "y",
                base: 0
            }}
        />
    );


    if (!selectedCountry) {
        return (
            <div className="chartContainer">
                <div className="chartOneContainer">
                    {worldBarChart}
                </div>
                <div className="chartTwoContainer">
                    {LineChartData}
                </div>
            </div>
        )
    }

    return (
        <div className="chartContainer">
            <div className="chartOneContainer">
                {countryBarChart}
            </div>
            <div className="chartTwoContainer">
                {LineChartData}
            </div>
        </div>
    );
};

export default Chart;