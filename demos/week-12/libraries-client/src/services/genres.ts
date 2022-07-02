import axios from 'axios';
import IGenre from '../models/IGenre';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getGenresForLibrary = async ( id : number ) => {
    const response = await axios.get<IGenre[]>( `${baseUrl}/libraries/${id}/genres` );
    return response.data;
};

export {
    getGenresForLibrary
};