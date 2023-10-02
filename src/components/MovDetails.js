import React, { useEffect, useState,useContext } from 'react';
import '../styles/MovDetails.css';
import {
    Link,useNavigate
} from "react-router-dom";
import movContext from '../context/movContext';

export default function MovDetails() {

    const apiKey = process.env.REACT_APP_MOVIE_API
    let [details,setDetails]=useState([]);
    const context = useContext(movContext);
    const{id}=context;

    const getMovieDet = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&region=IN`;

        const response = await fetch(url);
        const data = await response.json();
        setDetails(data);
    };

    useEffect(()=>{
        getMovieDet();
    })

    let imgUrl = "";
    if (details.poster_path != null) {
        imgUrl = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
    }
    else {
        imgUrl = 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
    }

    const navigate = useNavigate();
    const goBack = () => {
		navigate(-1);
	}

    return (
        <>
        <Link to="/" className="btn ms-4 mt-4" role="button" onClick={goBack}  data-bs-toggle="button">&laquo; Back</Link>
            {details.success!==false ?(<div className='container d-flex'>
                <div className="d-flex flex-row mb-3" id='imgBox'>
                    <img src={imgUrl} className="card-img-top rounded" alt="..." />
                </div>
                <div className='d-flex flex-column mb-3' id='details'>
                    <h1 className='mx-5 my-4'>{details.title}</h1>
                    <p className='mx-5'>Status: {details.status}</p>
                    <p className='mx-5'>Original Release: {details.release_date}</p>
                    <p className='mx-5'>Genres : {details.genres?.map((genre,i) => { return (<span className="px-1" key={i}>{genre.name}</span>) })}</p>
                    <p className='mx-5'>Runtime: {details.runtime} mins</p>
                    <p className='mx-5'>Overview: {details.overview}</p>
                    <p className='mx-5'>Rating: {details.vote_average?.toFixed(1)}</p>
                    <p className='mx-5'>Original Language: {details.original_language?.toUpperCase()}</p>
                </div>
            </div>):(
               <h3 className='ms-5 mt-5'>The resource you requested could not be found</h3>
            )}
        </>
    )
}
