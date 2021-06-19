import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api";

export const worldData = async () => {
    const response = await axios.get(baseURL);
    return response;
};

export const countryList = async () => {
    const { data: { countries } } = await axios.get(`${baseURL}/countries`);
    return countries.map((country) => country.name);
};


export const fetchCountryData = (country) => {
    return axios.get(`${baseURL}/countries/${country}`);
};

export const fetchDailyData = async () => {
    const response = await axios.get(`${baseURL}/daily`);
    return response;
}