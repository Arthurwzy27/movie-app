import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MovieCard />

    </div>
  )
}

export default Home
