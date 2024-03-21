import { HeroImages } from "@/components/data/heroImages";
import { cubicBezier } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

// Step 2: Create a context with a default value
const MyContext = createContext();

// Step 3: Create a provider component
export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState(HeroImages.slice(0, 3));
  const [active, setActive] = useState(true);
  const [position, setPosition] = useState(true);
  const [flash, setFlash] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(true);

  const springy = cubicBezier(0.33, 1, 0.68, 1);

  const handleNextClick = () => {
    setPosition(!position);
    const currentIndex = HeroImages.indexOf(
      currentItems[currentItems.length - 1]
    );
    const nextItems = HeroImages.slice(currentIndex + 1, currentIndex + 4);
    setActive(!active);

    if (nextItems.length === 0) {
      // If no more items, wrap around to the beginning
      setCurrentItems(HeroImages.slice(0, 3));
    } else {
      setCurrentItems(nextItems);
    }
  };
  const handleFlash = () => {
    handleNextClick();
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 200);
  };
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500);
  }, [active, flash, position]);
  

  const value = {
    isLoading,
    setIsLoading,
    handleNextClick,
    active,
    setActive,
    currentItems,
    springy,
    position,
    flash,
    handleFlash,
    exitAnimation,
    setExitAnimation,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Step 4: Create a custom hook to access the context value
export const useAppContext = () => {
  return useContext(MyContext);
};
