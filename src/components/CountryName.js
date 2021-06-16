//this is the child component for the CountryDropDown component.
import React from 'react';
import { useState } from 'react';
import "../style/countryName.css";


const CountryName = ({selectedCountry}) => {

    const getTodayDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = String(today.getFullYear());

        today = dd + "/" + mm + "/" + yyyy;
        return (
            <span>{today}</span>
        )
    };

    if (!selectedCountry) {
        return (
           <div className="nameContainer">
                <span className="selectedCountry">World - </span>
                <span className="dateToday">{getTodayDate()}</span>
            </div> 
        )
    }


    return (
        <div className="nameContainer">
            <span className="selectedCountry">{`${selectedCountry} -`} </span>
            <span className="dateToday">{getTodayDate()}</span>
        </div>
    );
};

export default CountryName;