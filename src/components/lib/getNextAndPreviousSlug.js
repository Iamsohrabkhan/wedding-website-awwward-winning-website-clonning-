import { weddingData } from "../data/weddingdata";

export const getNextSlug = (currentSlug) => {
    const currentIndex = weddingData.findIndex(wedding => wedding.slug === currentSlug);
    if (currentIndex === -1 || currentIndex === weddingData.length - 1) {
        // If current slug is not found or it's the last one, return null
        return null;
    } else {
        // Otherwise, return the next slug
        return weddingData[currentIndex + 1].slug;
    }
};

export const getPreviousSlug = (currentSlug) => {
    const currentIndex = weddingData.findIndex(wedding => wedding.slug === currentSlug);
    if (currentIndex <= 0) {
        // If current slug is not found or it's the first one, return null
        return null;
    } else {
        // Otherwise, return the previous slug
        return weddingData[currentIndex - 1].slug;
    }
};