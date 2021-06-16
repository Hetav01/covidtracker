import React, { useState } from 'react';
import Header from "./Header";
/* import { fetchCountryData } from "../api/CovApi";   moving this to the countrydropdown component*/
import CountryDropDown from "../components/CountryDropDown";


const App = () => {
    const [ country, setCountry ] = useState("");

    const handleCountryChange = (selectedCountry) => { 
        /* fetchCountryData(selectedCountry).then(data => {     //moving this to the countrydropdown component.
            setCountryData(data.data);
        }); */
        setCountry(selectedCountry);
    }

//now CountryDropDown will be the parent component for all the components now on.

    return (
        <div className="appContainer" >
            <Header />
            <CountryDropDown handleCountryChange={handleCountryChange} /> 
        </div>
    );
};

export default App;
