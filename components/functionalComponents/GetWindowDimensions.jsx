/* 'use client'

import { useState, useEffect } from 'react';


function getWindowDimensions() {
  
  if (typeof window === "undefined") return null;

  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return {
    screenWidth,
    screenHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
} */