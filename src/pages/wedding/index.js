import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  stagger,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "@/components/icon";
import { useDataContext } from "@/App-Context/datafilter";
import Navbar from "@/components/Navbar";
import { getAllThemes } from "@/components/lib/themes";

const Wedding = () => {
  const { currentWedding, nextWedding, nextWeddingTheme } = useDataContext();
  const textControl = useAnimationControls();
  const imgControl = useAnimationControls();
  const locationControl = useAnimationControls();
  const controlClipPath = useAnimationControls();
  const [currentTheme, setCurrentTheme] = useState(currentWedding.theme);
  const [nextTheme, setNextTheme] = useState(nextWeddingTheme?.theme);

  const [control, animate] = useAnimate();

  // if (router.pathname !== "/") {
  //   setExitAnimation(true);
  // }

  const animationStart = async () => {
    // imgControl.set("hidden");
    // textControl.set("hidden");

    animate([
      [
        ".wedding-img",
        { scale: [0, 1] },
        { duration: 0.2, delay: stagger(0.2) },
      ],
      [
        ".wedding-btn--3",
        { opacity: [0, 1], scale: [0, 1] },
        { duration: 0.3, at: "0.5" },
      ],
    ]).then(() => {
      imgControl.start("visible");
      textControl.start("visible");
    });

    await animate([
      [
        ".circle",
        { opacity: [0, 1], rotate: [0, "90deg"], x: "-50%", y: "-50%" },
        { duration: 0.6 },
      ],
      [
        ".location",
        { opacity: [0, 1], x: ["-50%", "0%"], y: ["-50%", "0%"] },
        { duration: 0.6 },
      ],

      [".wedding-btn-3", { opacity: [0, 1], scale: [0, 1] }, { duration: 0.3 }],
    ]);
  };
  useEffect(() => {
    animationStart();
  }, []);

  const nextSlide = async () => {
    controlClipPath.set("hidden"),
      await Promise.all([
        controlClipPath.start("visible"),
        locationControl.start("exit"),
        imgControl.start("exit"),
        textControl.start("exit"),
        nextWedding(),
      ]);
    await animationStart();
  };

  return (
    <AnimatePresence>
      <div
        className={`bg-secondary w-screen h-screen absolute  -z-10 ${currentTheme}  `}
      />
      <motion.div
        className={`bg-secondary w-screen h-screen absolute z-10 ${nextTheme}`}
        variants={{
          hidden: {
            clipPath: "circle(0% at 50% 50%)",
          },
          visible: {
            clipPath: "circle(100% at 50% 50%)",
            transition: {
              // type: "spring",
              duration: 0.7,
              delay:0.2
            },
          },
        }}
        initial="hidden"
        animate={controlClipPath}
        onAnimationComplete={() => {
          setNextTheme(nextWeddingTheme?.theme);
          setCurrentTheme(currentWedding?.theme);
          controlClipPath.set("hidden");
        }}
      />

      {
        <motion.div
          key={Math.random()}
          className={`parent absolute w-screen h-screen  ${currentWedding?.theme}           
     
          `}
        >
          <Navbar />
          <div ref={control} className="relative w-full h-full wedding ">
            {/* <Buttonss /> */}
            <div
              className="absolute space-x-2  
             bottom-20   lg:bottom-10 left-1/2  lg:left-20 -translate-x-1/2 -translate-y-1/2
             z-50 text-primary pont "
            >
              <motion.button
                className=" wedding-btn wedding-btn--2  bg-white p-3 rounded-2xl 
                 text-primary  group overflow-hidden duration-200 ease-springy transition-all hover:!scale-110"
                onClick={nextSlide}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                <ArrowUp
                  className=" transition-all duration-200 ease-in-out
      -translate-y-[120%] group-hover:-translate-y-0
      "
                />
                <ArrowUp
                  className=" transition-all duration-200  ease-in-out
      absolute top-0 translate-y-[40%] lg:translate-y-1/2 group-hover:translate-y-[180%]
      "
                />
              </motion.button>
              <motion.button
                className=" wedding-btn wedding-btn--2  bg-white p-3 rounded-2xl  
                 text-primary  group overflow-hidden duration-200 ease-springy transition-all hover:!scale-110"
                onClick={nextSlide}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.1,
                  },
                }}
              >
                <ArrowDown
                  className=" transition-all duration-200 ease-in-out
      -translate-y-[120%] group-hover:-translate-y-0 
      "
                />
                <ArrowDown
                  className=" transition-all duration-200  ease-in-out
      absolute top-0 translate-y-[40%] lg:translate-y-1/2 group-hover:translate-y-[180%]
      "
                />
              </motion.button>
            </div>

            <Colors activeTheme={currentWedding?.theme} />
            {
              <AnimatedPictures
                imgControl={imgControl}
                currentWedding={currentWedding}
                // btnControl={btnControl}
              />
            }
            {/* text  */}
            <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  capitalize z-20">
              <Heading
                textControl={textControl}
                text={currentWedding?.coupleName}
              />
            </div>

            {/* sub-text with circle */}
            <SubHeading locationControl={locationControl} />
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

const AnimatedPictures = ({ imgControl, currentWedding }) => {
  const route = useRouter();
  return (
    <>
      <motion.div
        className="cover-image 
        h-60 w-40 md:h-64 md:w-44 sm:h-64 lg:w-60 lg:h-80  
        wedding-img wedding-img--2 scale-0
          [--top-to:30%] [--left-to:15%]
          sm:[--top-to:25%] sm:[--left-to:25%]
          md:[--top-to:20%] md:[--left-to:30%]
          lg:[--top-to:15%] lg:[--left-to:35%] 
          "
        variants={{
          hidden: {
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 10,
            x: "-50%",
            y: "-50%",
            rotate: "-5deg",
            scale: 0,
          },
          visible: {
            position: "absolute",
            top: "var(--top-to)",
            left: "var(--left-to)",
            rotate: "-15deg",
            transition: {
              type: "spring",
              duration: 0.7,
              zIndex: 10,
            },
          },
          exit: {
            position: "absolute",
            top: "-50%",
            transition: {
              duration: 1,
              type: "spring",
            },
          },
        }}
        initial="hidden"
        exit="exit"
        animate={imgControl}
      >
        <Image
          alt={currentWedding?.images[1].alt}
          src={currentWedding?.images[1].src}
          fill
          className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
        />
        /
      </motion.div>

      {/* 2ns image  */}
      <motion.div
        className="cover-image 
          h-60 w-40 md:h-64 md:w-44 sm:h-64 lg:w-60 lg:h-80  
          wedding-img wedding-img--2 scale-0
          [--top-to:80%] [--left-to:90%] [--rotate-to:-15deg]
          sm:[--top-to:85%] sm:[--left-to:75%] sm:[--rotate-to:15deg]
          md:[--top-to:85%] md:[--left-to:69%]
          lg:[--top-to:85%] lg:[--left-to:65%] 
          "
        variants={{
          hidden: {
            scale: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            zIndex: 10,
            rotate: "5deg",
          },
          visible: {
            position: "absolute",
            top: "var(--top-to)",
            left: "var(--left-to)",
            rotate: "var(--rotate-to)",
            transitionDelay: 0.5,
            transition: {
              type: "spring",
              duration: 0.7,
            },
          },
          exit: {
            position: "absolute",
            top: "-30%",
            transition: {
              duration: 0.6,
              // type: "spring",
              ease: "easeIn",
            },
          },
        }}
        initial="hidden"
        exit="exit"
        animate={imgControl}
      >
        <Image
          src={currentWedding?.images[2].src}
          alt={currentWedding?.images[2].src}
          fill
          className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
        />
        /
      </motion.div>

      {/* 3rd image  */}
      <motion.div
        className="cover-image
        h-60 w-40 md:h-64 md:w-44 sm:h-64 lg:w-60 lg:h-80  
        wedding-img wedding-img--2 scale-0"
        variants={{
          hidden: {
            scale: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            zIndex: 10,
          },
          exit: {
            position: "absolute",
            top: "-50%",
            transition: {
              duration: 0.6,
              // type: "spring",
              ease: "easeIn",
            },
          },
        }}
        initial="hidden"
        exit="exit"
        animate={imgControl}
      >
        <motion.div
          className="relative  w-full h-full"
          layoutId="main-picture"
          transition={{
            layout: { duration: 0.6 },
          }}
        >
          <Image
            src={currentWedding?.images[0].src}
            // src={img3}
            alt={currentWedding?.images[0].alt}
            fill
            className="absolute object-center object-cover bg-white/80 backdrop-blur-sm p-1.5"
          />
        </motion.div>
        <motion.button
          className="wedding-btn wedding-btn--3 bg-white p-2 rounded-lg  lg:p-3 lg:rounded-xl absolute -bottom-6 left-7 lg:left-12 text-primary  group overflow-hidden duration-200 ease-springy transition-all hover:!scale-110 text-lg font-normal text-balance text-center"
          onClick={() => {
            route.push(`/wedding/${currentWedding?.slug}`);
          }}
        >
          <span
            className=" block transition-all duration-200 ease-in-out
      -translate-y-[200%] group-hover:-translate-y-0  
      "
          >
            View Gallery
          </span>
          <span
            className="block transition-all duration-200  ease-in-out
      absolute top-0 translate-y-[40%] lg:translate-y-1/2 group-hover:translate-y-[200%]
      "
          >
            View Gallery
          </span>
        </motion.button>
      </motion.div>
    </>
  );
};
const Heading = ({ textControl, text }) => {
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      // y: `0.75em`,
      translateY: `0.75em`,
      translateX: `-1em`,
    },
    exit: {
      opacity: 0,
      // y: `0.75em`,
      translateY: `-0.75em`,
      translateX: `-1em`,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      // y: `0em`,
      translateY: `0em`,
      translateX: `0em`,

      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <>
      <h2
        className="inline-block text-5xl tracking-wider sm:text-7xl lg:text-8xl xl:text-9xl font-normal"
        aria-label={text}
        role="heading"
      >
        <span className="sr-only">{text}</span>
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              className="inline-block whitespace-nowrap not-sr-only"
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={textControl}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              &nbsp;
              {word.split("").map((character, index) => {
                return (
                  <motion.span
                    className="inline-block"
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h2>
    </>
  );
};

export const SubHeading = ({ locationControl }) => {
  return (
    <div
      className="absolute overflow-hidden size-82 bg-red-0 lg:size-128  top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2  "
    >
      <motion.span
        className="location scale-0 top-2 text-lg font-normal left-1/2
    -translate-x-1/2 -translate-y-1/2 absolute tracking-wider "
        variants={{
          exit: {
            opacity: 0,
          },
        }}
        animate={locationControl}
      >
        Barazil
      </motion.span>
      <motion.div
        className="circle circle-1 opacity-0 absolute bg-transparent size-90  md:size-112 lg:size-144 border-primary [border-width:_0.5px] rounded-full top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2 
    border-l-transparent border-r-transparent border-b-transparent  z-30"
        variants={{
          exit: {
            opacity: 0,
          },
        }}
        animate={locationControl}
      />
      <motion.div
        className="circle circle-2 opacity-0 absolute bg-transparent size-90  md:size-112 lg:size-144 border-primary [border-width:_0.5px] rounded-full top-1/2 left-1/2 
   -translate-x-1/2 -translate-y-1/2
   border-l-transparent border-r-transparent border-t-transparent  z-30"
        variants={{
          exit: {
            opacity: 0,
          },
        }}
        animate={locationControl}
      />
    </div>
  );
};

export default Wedding;

export const Colors = ({ activeTheme }) => {
  console.log("🚀 ~ Colors ~ activeTheme:", activeTheme);
  const themes = getAllThemes();
  const hoverIn = {
    scale: 1.4,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  };
  return (
    <div className="colors absolute top-[80%] right-[90%] space-y-1 lg:space-y-0  lg:right-10 lg:top-10  lg:flex lg:gap-3 justify-center items-center z-20">
      {themes.map((theme, index) => (
        <motion.button
          className={` transform duration-200 block  rounded-full cursor-pointer hover:scale-125 transition-all springy
          bg-primary ${theme} size-2.5 ${
            activeTheme == theme ? "scale-125" : ""
          }`}
          key={index}
          layout
          // layoutId="theme"
          // initial={{
          //   opacity: 0,
          //   scale: 0,
          // }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 0.3,
          //   delay: 0.1 * index,
          // }}
          // whileHover={hoverIn}
        />
      ))}
    </div>
  );
};
