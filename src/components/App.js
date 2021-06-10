import React, { useState } from 'react';
import Header from "./Header";
import { worldData } from "../api/CovApi";
import axios from "axios";
import CountryDropDown from "../components/CountryDropDown";

const App = () => {

    return (
        <div className="appContainer" >
            <Header />
            <CountryDropDown />
        </div>
    );
};

export default App;
