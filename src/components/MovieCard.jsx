import React from 'react';
import { datas } from './api/data'

import './scss/MovieCard.css';

const MovieCard = () => {
  return (
    <>
    <div className='movie-card'>
      <div className="movie-category">Popular</div>
      <div className="movie-container">
        {datas.map((movie, id) => {
          return (
            <div className='movieMap '>
              <div className="movie-img"><img src={movie.img} alt='movie-img'/></div>
              <div className="movie-infos">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-year">{movie.year}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default MovieCard
