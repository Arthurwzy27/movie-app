import React from 'react';
import {useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../components/api/dataService';
import Searchbox from '../components/Searchbox';
import useModal from "./useModal";


import './MovieDetails.css';


const MovieDetails = () => {
  let { id } = useParams(); // -> Used to find the movie ID from the params Route path
  const { data: movieDetails } = useQuery(['movie details', id], () => id !== null && fetchMovieDetails(id))

  return (
    <>
    <div className="movie-detail-container">
      <h3>Movie details</h3>
      <div className="movie-detail-wrapper">
        <div className="detail-movie-img">
          <img className="detail-movie-img1" src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt={movieDetails?.original_title} />
        </div>
        <div className="movie-details">
          <span className="detail-movie-title">{movieDetails?.original_title}</span>
          <div className="movie-detail-info">
            <img className="movie-detail-productor-img" src={`https://image.tmdb.org/t/p/w500/${movieDetails?.production_companies[0]?.logo_path}`} alt={movieDetails?.production_companies[0]?.name} />
            <span className="XXX">{movieDetails?.production_companies[0]?.name}</span>

          </div>
      </div>
      </div>

      <div className="movie-detail-overview">
        <p>{movieDetails?.overview}</p>
      </div>
    </div>
    </>
  )
}

export default MovieDetails
