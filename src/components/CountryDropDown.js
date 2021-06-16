import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl, Box } from '@material-ui/core';
import "../style/dropdown.css";
import { countryList } from "../api/CovApi";
import CountryName from "./CountryName";

const CountryDropDown = ({ handleCountryChange }) => {

    const [ countries, setCountries ] = useState([]);
    const [ selectedCountry, setSelectedCountry ] = useState("");

    useEffect(() => {
        const listCountries = async () => {
            setCountries(await countryList());
        };
        setCountries([...countries, "World"]);
        listCountries();
    }, []);
    

    const findSelectedCountry = (country) => {
        setSelectedCountry(countries.find((e) => e === country));
    }

    const mapCountries = countries.map((country, i) => { 
        return (
            <option className="options" key={i} value={country}>{country}</option>
        );
    });

    return (
        <Box className="boxContainer" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
            <FormControl className="formControl">
                <NativeSelect className="nativeSelect" defaultValue="" onChange={(e) => {handleCountryChange(e.target.value); findSelectedCountry(e.target.value);}} >
                    <option className="options" value="">World</option>
                    {mapCountries}
                </NativeSelect>
            </FormControl>
            <CountryName className="countryNameContainer" selectedCountry={selectedCountry}/>
        </Box>
    );
};

export default CountryDropDown;