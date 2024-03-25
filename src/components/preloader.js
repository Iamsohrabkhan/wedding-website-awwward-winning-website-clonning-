import { useAppContext } from "@/App-Context/context";
import { useAnimate, cubicBezier } from "framer-motion";
import React, { useEffect } from "react";

import Picture from "./picture";
import { LoaderImages } from "./data/loaderImages";
const Preleader = () => {
  const {
    setIsLoading,
  } = useAppContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    async function loaderAnimaiton() {
      await animate(
        ".img1",
        { scale: [0, 1.1, 1], rotate: "5deg", x: 0 },
        { duration: 0.4, type: "spring" }
      );
      await animate(
        ".img2",
        { scale: [0, 1.1, 1], rotate: "-5deg", x: 0 },
        { duration: 0.4, type: "spring" }
      );
      await animate(
        ".img3",
        { scale: [0, 1.1, 1], rotate: "5deg", x: 10 },
        { duration: 0.4, type: "spring" }
      );
      await animate(
        ".img4",
        { scale: [0, 1.1, 1], rotate: "-5deg", x: -10 },
        { duration: 0.4, type: "spring" }
      );
      await animate(
        ".img5",
        { scale: [0, 1.1, 1], rotate: "5deg", x: 10 },
        { duration: 0.4, type: "spring" }
      );
      animate(
        ".img5",
        { y: "160%", x: "-30%", opacity: [1, 1, 1, 1, , 1, 1, 1, 0] },
        { duration: 1.2, ease: cubicBezier(0.7, 0, 0.84, 0) }
      );
      animate(
        ".img4",
        { y: "160%", x: "30%", opacity: [1, 1, 1, 1, , 1, 1, 1, 0] },
        { duration: 1.2, ease: cubicBezier(0.7, 0, 0.84, 0), delay: 0.3 }
      );
      animate(
        ".img3",
        { y: "160%", x: "-30%", opacity: [1, 1, 1, 1, , 1, 1, 1, 0] },
        { duration: 1.2, ease: cubicBezier(0.7, 0, 0.84, 0), delay: 0.6 }
      );
      animate(
        ".img2",
        { y: "160%", x: "30%", opacity: [1, 1, 1, 1, , 1, 1, 1, 0] },
        { duration: 1.2, ease: cubicBezier(0.7, 0, 0.84, 0), delay: 0.9 }
      );
      animate(
        ".img1",
        { y: "160%", x: "-30%", opacity: [1, 1, 1, 1, , 1, 1, 1, 0] },
        { duration: 1.2, ease: cubicBezier(0.7, 0, 0.84, 0), delay: 1.2 }
      ).then(() => {
        setIsLoading(false);
      });
    }
    loaderAnimaiton();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full absolute inset-0  bg-secondary light"></div>
      <div ref={scope} className="absolute z-100 translate-y-1/2 w-full h-full">
        <div className="relative flex justify-center items-center ">
          <Picture
            src={LoaderImages[0]?.src}
            alt={LoaderImages[0]?.alt}
            className="img1 scale-0 absolute"
            priority={true}
          />
          <Picture
            src={LoaderImages[1]?.src}
            alt={LoaderImages[1]?.alt}
            className="img2 scale-0 absolute"
            priority={true}
          />
          <Picture
            src={LoaderImages[2]?.src}
            alt={LoaderImages[2]?.alt}
            className="img3 scale-0 absolute"
            priority={true}
          />
          <Picture
            src={LoaderImages[3]?.src}
            alt={LoaderImages[3]?.alt}
            className="img4 scale-0 absolute"
            priority={true}
          />
          <Picture
            src={LoaderImages[4]?.src}
            alt={LoaderImages[4]?.alt}
            className="img5 scale-0 absolute"
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default Preleader;
