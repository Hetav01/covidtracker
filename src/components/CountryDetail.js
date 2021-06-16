import React from 'react';
import "../style/countryDetail.css";

const CountryDetail = ({ handleCountryChange }) => {

    


    return (
        <div className="countryDetailsContainer" onChange={(e) => handleCountryChange(e.target.value)}>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default CountryDetail;
