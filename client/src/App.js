import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <BrowserRouter>
      <Routes>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path='/profileUser' element={<Profile />} />
          </Route>
          <Route exact path='/' element={<Home />} />
      </Routes>
  </BrowserRouter>
);

export default App;
