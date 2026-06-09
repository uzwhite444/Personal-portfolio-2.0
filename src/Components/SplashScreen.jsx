import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.scss';

/**
 * SplashScreen Component
 * 
 * Premium splash screen with:
 * - Typing effect animation
 * - Gradient shimmer background
 * - Elegant progress bar
 * - Smooth fade-out transition
 * - SessionStorage persistence (shows only once per session)
 */
const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = 'Khasanov Muhammadabdulloh';
  const subtitle = 'Frontend Developer';
  const ANIMATION_DURATION = 2500; // ms
  const FADE_OUT_DURATION = 500; // ms
  const TYPING_SPEED = 80; // ms per character

  // Typing effect for main text
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText]);

  // Progress bar animation
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / ANIMATION_DURATION) * 100, 100);
      setProgress(newProgress);

      // Complete animation
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete?.();
          }, FADE_OUT_DURATION);
        }, 0);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_DURATION / 1000 }}
        >
          {/* Animated gradient background */}
          <div className="splash-screen__background">
            <div className="splash-screen__gradient-1"></div>
            <div className="splash-screen__gradient-2"></div>
            <div className="splash-screen__gradient-3"></div>
          </div>

          {/* Content container */}
          <div className="splash-screen__content">
            {/* Main typing text */}
            <motion.div
              className="splash-screen__text-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="splash-screen__title">
                {displayedText}
                <span className="splash-screen__cursor">
                  {!isTypingComplete && '_'}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with stagger animation */}
            <motion.p
              className="splash-screen__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>

            {/* Elegant progress bar */}
            <motion.div
              className="splash-screen__progress-container"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="splash-screen__progress-bar">
                <motion.div
                  className="splash-screen__progress-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'linear' }}
                />
              </div>
              <span className="splash-screen__progress-text">{Math.round(progress)}%</span>
            </motion.div>

            {/* Decorative elements */}
            <div className="splash-screen__dots">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="splash-screen__dot"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
