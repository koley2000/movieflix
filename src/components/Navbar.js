import React, { useState } from 'react';
import {
    Link,useNavigate
} from "react-router-dom";
import '../styles/Navbar.css';


export default function Navbar(props) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const onChange = (e) => {
        setValue(e.target.value);
    }


    const handleSearch = (e) => {
        e.preventDefault();
        props.setSearchValue(value);
        setValue('');
    }

    const handlePlaying = (e) => {
        e.preventDefault();
        props.setSearchValue('');
        props.setMode('now_playing');
        props.setPage(1);
        navigate(-1);
    }

    const handlePopular = (e) => {
        e.preventDefault();
        props.setSearchValue('');
        props.setMode('popular');
        props.setPage(1);
        navigate(-1);
    }

    const handleComing = (e) => {
        e.preventDefault();
        props.setSearchValue('');
        props.setMode('upcoming');
        props.setPage(1);
        navigate(-1);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handlePlaying}><h3>MovieFlix</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={handlePlaying}>Now Playing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" onClick={handlePopular} >Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" onClick={handleComing}>Upcoming</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Type to search..." aria-label="Search" value={value} onChange={onChange} />
                            <button className="btn my-sm-0" type="submit" onClick={handleSearch}><Link className="btn-link" to='/'><i className="fa fa-search"></i></Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

