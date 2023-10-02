import MovDetails from './components/MovDetails';
import Movcontent from './components/Movcontent';
import Navbar from './components/Navbar';
import movContext from './context/movContext';
import React, { useState, useEffect, useContext } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const context = useContext(movContext);
  const { getMovieReq, getAllMovies} = context;
  const [searchValue, setSearchValue] = useState('');
  const [mode, setMode] = useState('now_playing');
  const [title, setTitle] = useState('');
  const [page,setPage] = useState(1);

  useEffect(() => {
    if (searchValue === "") {
      getAllMovies(mode,page);
    }
    else {
      getMovieReq(searchValue,page);
    }
    // eslint-disable-next-line
  }, [searchValue, mode,page]);

  useEffect(() => {
    if (mode === 'now_playing' && searchValue === '') setTitle('Now Playing');
    else if (mode === 'popular' && searchValue === '') setTitle('Popular');
    else if (mode === 'upcoming' && searchValue === '') setTitle('Upcoming');
    else if (searchValue !== '') setTitle(`Showing Results of "${searchValue}"`);
    // eslint-disable-next-line
  }, [mode, searchValue])

  return (
    <>
      <Router>
        <Navbar setMode={setMode} setSearchValue={setSearchValue} setPage={setPage}/>
        <Routes>
          <Route exact path='/' element={<Movcontent title={title} page={page} setPage={setPage}/>} />
          <Route exact path="/moviedetails" element={<MovDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
