import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl, Box } from '@material-ui/core';
import "../style/dropdown.css";
import { countryList } from "../api/CovApi";
import { fetchCountryData } from "../api/CovApi";
import { worldData } from "../api/CovApi";
import CountryName from "./CountryName";
import CountryDetail from "../components/CountryDetail";
import Chart from "./Chart";
//this is the main parent component now.
/* 
    fetchCountryData(selectedCountry).then(data => {
        setCountryData(data.data);
    }); 
*/
const CountryDropDown = ({ handleCountryChange}) => {

    const [ countries, setCountries ] = useState([]);
    const [ selectedCountry, setSelectedCountry ] = useState("");
    const [ countryData, setCountryData ] = useState({data: null, status: false});
    
    useEffect(() => {
        const listCountries = async () => {
            setCountries(await countryList());
        };
        listCountries();
    }, []);
    

    const findSelectedCountry = (country) => {
        setSelectedCountry(countries.find((e) => e === country));
    }

    const handleCountryData = (country) => {
        fetchCountryData(country).then(data => {
            setCountryData({ data: data.data, status: true });
        }); 
    }    

    const mapCountries = countries.map((country, i) => { 
        return (
            <option className="options" key={i} value={country}>{country}</option>
        );
    }); 

    return (
        <Box className="boxContainer" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
            <FormControl className="formControl">
                <NativeSelect className="nativeSelect" defaultValue="World" onChange={(e) => {handleCountryChange(e.target.value); findSelectedCountry(e.target.value); handleCountryData(e.target.value);}} >
                    {mapCountries}
                </NativeSelect>
            </FormControl>
            <CountryName className="countryNameContainer" selectedCountry={selectedCountry}/>
            <CountryDetail className="countryDetailContainer" selectedCountry={selectedCountry} countryData={countryData} />
            <Chart className="chart1Container" countryData={countryData} selectedCountry={selectedCountry} />
        </Box>
    );
};

export default CountryDropDown;

//                    <option className="options" value="">World</option>
