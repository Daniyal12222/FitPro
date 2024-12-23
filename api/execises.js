import axios from "axios";

const baseUrl=  'https://exercisedb.p.rapidapi.com';

const apiKey =  '87a4a1d279mshaa4de1af80bfabfp150708jsn41666f27bbdd';

const apiCall = async (url , params) => {
    try{
const options = {
    method: 'GET',
    url,
    params,
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      },
    
}
const response = await axios(options);
return response.data
    }catch(error){
        console.error(error);
        throw error;
    }
}

export const fechDataExercises = async (bodyPart)=>{
let data = await apiCall( baseUrl +`/exercises/bodyPart/${bodyPart}`);
return data;
}