import React, { useEffect, useState } from 'react';
import "../style/countryDetail.css";
import { worldData } from "../api/CovApi";
/* import CountUp from "react-countup"; */
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

    /* <CountUp
        start={0}
        end={countryData.confirmed.value}
        duration={2.5}
    >
        {({ countUpRef}) => (
            <div>
                <span ref={countUpRef}></span>
            </div>
        )}
    </CountUp>
    */

    if (!selectedCountry) {
        return (
            <div className="countryDetailsContainer" >
                <div className="infectedContainer dataContainer">
                    <div className="infectedNumber value">{confirmed.value}</div>
                    <div className="infectedText text">Confirmed</div>
                </div>
                <div className="deathsContainer dataContainer">
                    <div className="deathsNumber value">{deaths.value}</div>
                    <div className="deathsText text">Deaths</div>
                </div>
                <div className="recoveredContainer dataContainer">
                    <div className="recoveredNumber value">{recovered.value}</div>
                    <div className="recoveredText text">Recovered</div>
                </div>
            </div>
        )
    }


    return (
        <div className="countryDetailsContainer" >
            <div className="infectedContainer dataContainer">
                <div className="infectedNumber value">{countryData.status? countryData.data.confirmed.value : -1}</div>
                <div className="infectedText text">Confirmed</div>
            </div>
            <div className="deathsContainer dataContainer">
                <div className="deathsNumber value">{countryData.status? countryData.data.deaths.value : -1}</div>
                <div className="deathsText text">Deaths</div>
            </div>
            <div className="recoveredContainer dataContainer">
                <div className="recoveredNumber value">{countryData.status? countryData.data.recovered.value : -1}</div>
                <div className="recoveredText text">Recovered</div>
            </div>
        </div>
    );
};

export default CountryDetail;
