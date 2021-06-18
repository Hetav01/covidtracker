import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { worldData } from "../api/CovApi";
import "../style/chart1.css";

const Chart1 = ({ countryData, selectedCountry }) => {

    const [ worldsData, setWorldsData ] = useState({});
    const [ confirmed, setConfirmed ] = useState({});
    const [ deaths, setDeaths ] = useState({});
    const [ recovered, setRecovered ] = useState({});

    useEffect(() => {
        worldData().then(data => {
            setWorldsData(data.data);
            setConfirmed(data.data.confirmed);
            setDeaths(data.data.deaths);
            setRecovered(data.data.recovered);
        });        
    }, []);

    const worldBarChart = (
        <Bar 
            data= {{
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [{
                    label: "Cases ",
                    data: [ confirmed.value, deaths.value, recovered.value ], 
                    backgroundColor: [ "rgba(198, 145, 107, 0.5", "rgba(225, 65, 39, 0.5)", "rgba(255, 255, 255, 0.5)" ]
                }]
            }}
            options= {{
                legend: { display: true},
                title: { 
                    display: true,  
                    text: "The Census for the World stands as: ",
                    color: "#fff"
                }
            }}
        />
    );


    if (!selectedCountry) {
        return (
            <div className="chartOneContainer">
                {worldBarChart}
            </div>
        )
    }

    return (
        <div className="chartOneContainer">

        </div>
    );
};

export default Chart1;