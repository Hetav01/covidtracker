import React, { useEffect, useState } from 'react';
import "../style/countryDetail.css";
import { worldData } from "../api/CovApi";

const CountryDetail = ({selectedCountry, countryData}) => {

    const [ worldsData, setWorldsData ] = useState({});
    const [ confirmed, setConfirmed ] = useState({});
    const [ deaths, setDeaths ] = useState({});
    const [ recovered, setRecovered ] = useState({});
    // unnecessary code
    // const [ countryConfirmed, setcountryConfirmed ] = useState({});
    // const [ countryDeaths, setcountryDeaths ] = useState({});
    // const [ countryRecovered, setcountryRecovered ] = useState({}); 
    // const [ value, setValue ] = useState({ confirmed: null, deaths: null, recovered: null });  

    useEffect(() => {
        worldData().then(data => {
            setWorldsData(data.data);
            setConfirmed(data.data.confirmed);
            setDeaths(data.data.deaths);
            setRecovered(data.data.recovered);
        });
        // unnecessary code
        // if (countryData.status) {
        //     setValue({ confirmed: countryData.data.confirmed, deaths: countryData.data.deaths, recovered: countryData.data.recovered})
        // }
        // console.log(value);
        // console.log(countryData.data);
        // console.log("tst");
    }, []);

    if (!selectedCountry) {
        return (
            <div className="countryDetailsContainer" >
                <div className="infectedContainer">
                    <div className="infectedNumber">{confirmed.value}</div>
                    <div className="infectedText">Infected</div>
                </div>
                <div className="deathsContainer">
                    <div className="deathsNumber">{deaths.value}</div>
                    <div className="deathsText">Deaths</div>
                </div>
                <div className="recoveredContainer">
                    <div className="recoveredNumber">{recovered.value}</div>
                    <div className="recoveredText">Recovered</div>
                </div>
            </div>
        )
    }


    return (
        <div className="countryDetailsContainer" >
            <div className="infectedContainer">
                <div className="infectedNumber">{countryData.status? countryData.data.confirmed.value : 'null'}</div>
                <div className="infectedText">Infected</div>
            </div>
            <div className="deathsContainer">
                <div className="deathsNumber">{countryData.status? countryData.data.deaths.value : 'null'}</div>
                <div className="deathsText">Deaths</div>
            </div>
            <div className="recoveredContainer">
                <div className="recoveredNumber">{countryData.status? countryData.data.recovered.value : 'null'}</div>
                <div className="recoveredText">Recovered</div>
            </div>
        </div>
    );
};

export default CountryDetail;
