import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/hola' element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
};

export default App;
