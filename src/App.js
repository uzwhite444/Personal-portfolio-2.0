import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Page/Home';
import SplashScreen from './Components/SplashScreen';
import useSplashScreen from './Components/useSplashScreen';
import './App.scss';

function App() {
  const location = useLocation();
  const { showSplash, isHydrated, handleSplashComplete } = useSplashScreen();
  
  // Prevent layout shift by not rendering routes during hydration with splash
  if (!isHydrated) {
    return null;
  }
  
  return (
    <div className="app">
      {/* Splash Screen - renders on top of all content */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {/* Main routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
