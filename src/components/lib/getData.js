import { weddingData } from "../data/weddingdata";

export const getData = (router) => {
    const slug = router.pathname.split("/").pop();
    const wedding = weddingData.find((wedding) => {
      return wedding.slug === slug;
    });
  
    return wedding;
  };
  