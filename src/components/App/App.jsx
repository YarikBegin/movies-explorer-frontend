import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from '../../context/AuthContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Page404 from '../Page404/Page404';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
      <div className='page'>
        <Routes>
          <Route exact path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route exact path='/movies' element={<Movies isLoggedIn={isLoggedIn} />} />
          <Route exact path='/saved-movies' element={<SavedMovies isLoggedIn={isLoggedIn} />} />
          <Route exact path='/profile' element={<Profile isLoggedIn={isLoggedIn} />} />
          <Route exact path='/signup' element={<Register />} />
          <Route exact path='/signin' element={<Login />} />
          <Route exact path='*' element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default App;