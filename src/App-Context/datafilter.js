import React, { createContext, useContext, useState } from "react";
import { weddingData } from "@/components/data/weddingdata";

// Step 2: Create a context with a default value
const MyContext = createContext();

// Step 3: Create a provider component
export const DataProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % weddingData.length);
  };

  const value = {
    currentWedding: weddingData[currentIndex],
    nextWedding: handleNextClick,
    nextWeddingTheme:
      weddingData[
        currentIndex === weddingData.length - 1 ? 0 : currentIndex + 1
      ],
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Step 4: Create a custom hook to access the context value
export const useDataContext = () => {
  return useContext(MyContext);
};
