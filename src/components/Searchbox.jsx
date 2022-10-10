import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {  fetchMovieDetails, fetchSearchMovie } from '../components/api/dataService';
import { Outlet, Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import useModal from "../pages/useModal";


import './SearchBox.css'

const Searchbox = ({isShowing, hide}) => {
  // const navigate = useNavigate();
  // const { id } = useParams();
  // console.log('params', id);
  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  //   // our api to fetch the search result
  //   console.log("search ", searchTerm);
  // };

  const [movie_id, setMovie_id] = useState('');
  const [queryMovie, setQueryMovie] = useState('');
  const { data: search } = useQuery(['search', queryMovie], () => queryMovie !== '' && fetchSearchMovie(queryMovie))
    // const { data: movieDetails } = useQuery(['movie details', movie_id], () => movie_id !== null && fetchMovieDetails(movie_id))

  const getMovieDetails = (movie) => {
    // console.log('getMovieDetails', movie)
    setMovie_id(movie)
  }

  const onChangeSearch = e => {
    setQueryMovie(e.target.value.toLowerCase())
  }

  const onSearch = searchTerm => {
    // console.log('searchTerm', searchTerm)
    setQueryMovie(searchTerm)
  }

  const [dropdown, setDropdown] = useState(true);

  return (
    <div className='XXX'>
      <div className="search-container">
        <div className="search-inner">
          <input className='search-input' placeholder='Search for a movie' type="search"  value={queryMovie} onChange={onChangeSearch} />
          <button className='search-input-btn' onClick={() => onSearch(queryMovie)}>Search</button>
        </div>
        <div className="search-dropdown">
          {search?.results?.filter((movie) => {
              const searchTerm = queryMovie.toLowerCase();
              const movieTitle = movie.original_title.toLowerCase();

              return (
                searchTerm.length > 0 &&
                movieTitle.startsWith(searchTerm) &&
                movieTitle !== searchTerm
              );
            })
            .map((movie, id) => (
              <div key={id}>
                {isShowing ? ''
                : <Link to={`/movie/${movie.id}`}>
                    <div key={movie.id} className="dropdown-row" onClick={() => hide && setQueryMovie('')}>
                      {movie.poster_path ? <img className="dropdowm-row-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} /> : '' }
                      <span className="dropdown-row-movie">{movie.original_title}</span>
                    </div>
                  </Link>
                }
              </div>
            ))}
        </div>
      </div>

      {/* <div className="dropdown-content">
        <input type='search'
          className='banner-input-search'
          placeholder='Search a movie...'
          onChange={onSearch}
        />

        {data?.filter(movie => {
          if (queryMovie === '') { return movie }
          else if (movie.orignal_title.toLowerCase().includes(queryMovie.toLowerCase())) { return movie }
        })
        .map((movie, id) => {
          return (
          <ul key= {id} className='autocomplete-list'>

            <li>{movie.original_title}</li>
          </ul>

          )
        })
        }
      </div> */}
    </div>
  )
}

export default Searchbox
