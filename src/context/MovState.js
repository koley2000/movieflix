import React, { useState } from 'react';
import movContext from './movContext';


export default function MovState(props) {

    const apiKey = process.env.REACT_APP_MOVIE_API
    let [data, setData] = useState([]);
    let [id, setId] = useState('');

    const getAllMovies = async (mode, page) => {
        const url = `https://api.themoviedb.org/3/movie/${mode}?api_key=${apiKey}&region=IN&page=${page}`;

        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setData(responseJson);
    };



    const getMovieReq = async (searchValue, page) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}&page=${page}`;

        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setData(responseJson);
    };

    return (
        <movContext.Provider value={{ data, getMovieReq, getAllMovies, id, setId }}>
            {props.children}
        </movContext.Provider>
    )
}



