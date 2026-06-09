import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Page/Home';
import './App.scss';

function App() {
  const location = useLocation();
  
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
