import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => (
  <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profileUser' element={<Profile />} />
      </Routes>
  </BrowserRouter>
);

export default App;
