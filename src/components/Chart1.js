import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { worldData } from "../api/CovApi";
import "../style/chart1.css";

const Chart1 = ({ countryData, selectedCountry }) => {

    const [ worldsData, setWorldsData ] = useState({});
    const [ confirmed, setConfirmed ] = useState({});
    const [ deaths, setDeaths ] = useState({});
    const [ recovered, setRecovered ] = useState({});

/*     const [ countryConfirmed, setCountryConfirmed ] = useState({});
    const [ countryDeaths, setCountryDeaths ] = useState({});
    const [ countryRecovered, setCountryRecovered ] = useState({}); */

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
    }, []);


    const worldBarChart = (
        <Bar 
            data= {{
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [{
                    label: "Cases ",
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
                    label: "Cases ",
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
            <div className="chartOneContainer">
                {worldBarChart}
            </div>
        )
    }

    return (
        <div className="chartOneContainer">
            {countryBarChart}
        </div>
    );
};

export default Chart1;