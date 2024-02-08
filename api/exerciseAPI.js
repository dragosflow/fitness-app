import axios from "axios";
import { API_KEY, API_URL } from "@env"



const apiCall = async(url, params) => {
    const options = {
        method: 'GET',
        url: url,
        params: params,
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('error', error);
    }
};

export const fetchBodyPartExercise = async (bodyPart) => {
    const data = await apiCall(API_URL + `exercises/bodyPart/${bodyPart}`);
    return data;
   
};

