import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api";

export const worldData = async () => {
    const response = await axios.get(baseURL);
    console.log(response.data);

    return response;
};

export const countryList = async () => {
    const { data: { countries } } = await axios.get(`${baseURL}/countries`);
    return countries.map((country) => country.name);
};


export const fetchCountryData = async (country) => {
    return await axios.get(`${baseURL}/countries/${country}`);
};