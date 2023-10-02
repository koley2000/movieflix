import React,{useContext} from 'react';
import '../styles/Movitem.css';
import movContext from '../context/movContext';
import {
    Link
} from "react-router-dom";

export default function Movitem(props) {
    let imgUrl = "";
    if (props.img != null) {
        imgUrl = `https://image.tmdb.org/t/p/w500/${props.img}`;
    }
    else {
        imgUrl = 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
    }

    const context = useContext(movContext);
    const{setId}=context;

    function getId(){
        setId(props.id);
    }

    return (
        <div className="my-4">
            <Link className='text-decoration-none' to='/moviedetails' onClick={getId} rel="noreferrer">
                <div className="card" style={{ width: "10rem" }}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="textContent">
                    <p className="card-text my-1">{props.title}</p>
                    </div>
                </div>
            </Link>
        </div >
    )
}
