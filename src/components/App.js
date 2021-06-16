import React, { useState } from 'react';
import Header from "./Header";
import { fetchCountryData } from "../api/CovApi";
import CountryDropDown from "../components/CountryDropDown";

const App = () => {
    const [ country, setCountry ] = useState("");
    const [ countryData, setCountryData ] = useState({});

    const handleCountryChange = (selectedCountry) => {
        fetchCountryData(selectedCountry).then(data => {
            setCountryData(data.data);
        });
        setCountry(selectedCountry);
    }
    console.log(countryData);


    return (
        <div className="appContainer" >
            <Header />
            <CountryDropDown handleCountryChange={handleCountryChange} />
        </div>
    );
};

export default App;
