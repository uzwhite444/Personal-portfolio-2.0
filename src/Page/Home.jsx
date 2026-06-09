import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import './Home.scss';

function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add cursor follower
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    // let dotX = 0;
    // let dotY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    };
    
    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animate);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    animate();
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursor.remove();
      cursorDot.remove();
    };
  }, []);

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <Footer />
    </motion.div>
  );
}

export default Home;
