import { useEffect, useState } from 'react';

/**
 * useSplashScreen Hook
 * 
 * Manages splash screen visibility with sessionStorage persistence
 * - Shows splash screen only once per session
 * - Handles browser refresh/tab reload
 * - Returns loading state to render splash screen conditionally
 */
export const useSplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check if splash screen was already shown in this session
    const splashShown = sessionStorage.getItem('splashScreenShown');

    if (splashShown === 'true') {
      setShowSplash(false);
    } else {
      setShowSplash(true);
    }
    setIsHydrated(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashScreenShown', 'true');
  };

  return {
    showSplash,
    isHydrated,
    handleSplashComplete,
  };
};

export default useSplashScreen;
