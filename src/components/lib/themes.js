import { weddingData } from "../data/weddingdata";

export const getAllThemes = () => {
    const themes = weddingData.map(wedding => wedding.theme);
    return themes;
  };