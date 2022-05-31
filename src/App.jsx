import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';



// ! COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Actors from './components/Actors/Actors';
import Profile from './components/Profile/Profile';

const App = () => {

  return (
    <div >
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
