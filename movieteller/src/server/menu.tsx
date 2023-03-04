import IDataList from '../model/IDataList';
import axios from 'axios';

const getMoviesComingFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/movies-coming`)
        .then(response => response.data);
}

const getMoviesInTheatreFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/movies-in-theaters`)
        .then(response => response.data);
}

const getTopratedIndiaFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/top-rated-india`)
        .then(response => response.data);
}

const getTopratedMoviesFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/top-rated-movies`)
        .then(response => response.data);
}

const getFavourateMoviesFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/favourite`)
        .then(response => response.data);
}

export { getMoviesComingFromServer, getMoviesInTheatreFromServer, getTopratedIndiaFromServer, getTopratedMoviesFromServer, getFavourateMoviesFromServer };