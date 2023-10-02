import React, { useContext } from 'react';
import Movitem from './Movitem';
import '../styles/Movcontent.css';
import movContext from '../context/movContext';

export default function Movcontent(props) {

  const context = useContext(movContext);
  const { data } = context;

  const handleNext = async (e) => {
    e.preventDefault();
    props.setPage(props.page + 1);
  }

  const handlePrev = async (e) => {
    e.preventDefault();
    props.setPage(props.page - 1);
  }

  return (
    <div id='content-box' className='my-5 d-flex flex-column'>
      <h3 className='text-start' style={{ marginLeft: '1.8rem' }}>{props.title}</h3>
      { data.total_results !==0? (<div className="row">
        {data.results?.map((movie,i) => {
          return (
            <div className="col-1" key={i}>
              <Movitem img={movie.poster_path} title={movie.title} id={movie.id} />
            </div>
          );
        })}
      </div>): (
        <h2 className='d-flex justify-content-center my-5'>No Result Found</h2>
      )}
      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item mx-2">
            <button type="button" disabled={props.page <= 1} onClick={handlePrev} className="btn">
              &laquo;
            </button>
          </li>
          <button type="button" className="btn btn-outline-danger" disabled>{props.page}</button>
          <li className="page-item mx-2">
            <button type="button" disabled={props.page + 1 > data.total_pages} onClick={handleNext} className="btn">
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
