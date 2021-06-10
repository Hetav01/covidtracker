import axios from "axios";

export const worldData = async () => {
    const response = await axios.get("https://covid19.mathdro.id/api");
    console.log(response.data);

    return response;
};