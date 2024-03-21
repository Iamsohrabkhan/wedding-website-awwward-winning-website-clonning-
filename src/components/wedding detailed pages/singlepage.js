import { motion, useTransform,useInView,useAnimate,useScroll,stagger,useAnimationControls } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Picture from "../picture";
import { AnimatedPicture } from "../hero/heading";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cross, Hamburger } from "../icon";
import { useState,useEffect,useRef } from "react";

export const OneVideoOnePicture = ({ pic1,clasName="" }) => {
    return (
      <div
        className={twMerge("relative container mx-auto px-6 lg:pt-20 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pt-12",clasName)}
      >
        <div className="relative w-44 sm:w-68 md:w-86 lg:w-80 order-2">
          <video
            className="aspect-h-3 aspect-w-2 bg-white p-1.5 "
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playsInLine=""
          >
            <source
              src="https://marie-guillaume.cdn.prismic.io/marie-guillaume/1bc12959-8702-43a9-af12-8cb285b2e934_videolucie2.mp4"
              type="video/mp4"
            />
            {/* <source src="https://marie-guillaume.cdn.prismic.io/marie-guillaume/1bc12959-8702-43a9-af12-8cb285b2e934_videolucie2.mp4" type="video/ogg" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative justify-self-end order-1 lg:order-2">
          <Picture
            src={pic1.src}
            alt={pic1.alt}
            className="w-64 h-96 sm:w-94 sm:h-136 md:w-124 md:h-176 lg:w-152 lg:h-[58rem]"
          />
        </div>
      </div>
    );
  };
  
  export const OneSingleImage = ({ pic1, className = "" }) => {
    return (
      <div
        className={twMerge("relative container mx-auto px-6 py-1 ", className)}
      >
        <div className="relative w-82 h-52 md:w-144 md:h-96 lg:w-[59rem] lg:h-[39.3rem]">
          <Picture
            src={pic1.src}
            alt={pic1.alt}
            className="w-82 h-52 sm:w-116 sm:h-78 md:w-144 md:h-96 lg:w-[59rem] lg:h-[39.3rem] z-20"
          />
          <Circle className="absolute top-0 right-0 -translate-y-1/2  translate-x-1/2 z-10" />
        </div>
      </div>
    );
  };
  
  export const OnePictureLieInCenter = ({ pic1, className = "" }) => {
    return (
      <>
        <div
          className={twMerge(
            "flex justify-center items-center relative py-16 sm:py-12  px-6 ",
            className
          )}
        >
          <div className="w-64 h-44 sm:w-94 sm:h-64 md:w-120 md:h-80 lg:w-152 lg:h-104  relative z-10 ">
            <Picture
              src={pic1.src}
              alt={pic1.alt}
              className="w-64 h-44 sm:w-94 sm:h-64 lg:w-152 lg:h-104 z-10"
            />
            <Circle className="absolute top-0 right-0 -translate-y-1/2  translate-x-1/2 z-0" />
          </div>
        </div>
      </>
    );
  };
  
  export const ThreeImagesOneisBigTwoEqual = ({ pic1, pic2, pic3, className = "" }) => {
    return (
      <>
        <div
          className={twMerge(
            "relative container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 py-10  lg:py-20 px-6",
            className
          )}
        >
          <Picture
            src={pic1.src}
            alt={pic1.alt}
            className="w-82 h-120 sm:w-116 sm:h-176 md:w-144 md:h-200 lg:w-128 lg:h-192"
          />
          <div className="lg:justify-self-end flex gap-2">
            <Picture
              src={pic2.src}
              alt={pic2.alt}
              className="w-48 h-74 sm:w-70 sm:h-104 md:w-88 md:h-128  lg:w-72 lg:h-108"
            />
            <Picture
              src={pic3.src}
              alt={pic3.alt}
              className="w-48 h-74 sm:w-70 sm:h-104 md:w-88 md:h-128 lg:w-72 lg:h-108"
            />
          </div>
        </div>
      </>
    );
  };
  
  export const TwoPictures = ({ pic1, pic2, className = "" }) => {
    const [control, animate] = useAnimate();
    const isInview = useInView(control, {
      once: true,
      margin: "-70px",
    });
    useEffect(() => {
      const triggerPicture = () => {
        if (isInview) {
          animate(
            ".img",
            { y: ["120%", "0%"], rotate: ["0deg", "var(--rotate-to)"] },
            { duration: 0.5, delay: stagger(0.1) }
          );
        }
      };
  
      triggerPicture();
    }, [isInview, animate, control]);
    return (
      <div
        className={twMerge(
          "relative container mx-auto flex justify-center items-center py-12 lg:pt-0 lg:pb-32",
          className
        )}
      >
        <div className="-rotate-12 relative z-20 -top-6">
          <Picture
            className="w-48 h-70 sm:w-70 sm:h-104 lg:w-112 lg:h-152 "
            src={pic1.src}
            alt={pic1.alt}
          />
        </div>
        <div className="rotate-6 relative z-20">
          <Picture
            className="w-48 h-70 sm:w-70 sm:h-104 lg:w-112 lg:h-152 "
            src={pic2.src}
            alt={pic2.alt}
          />
        </div>
        <Circle className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 z-0 lg:size-80" />
      </div>
    );
  };
  export const TwoPicturesOneBigOneSmall = ({ pic1, pic2, className = "" }) => {
    return (
      <div
        className={twMerge(
          "relative container mx-auto pt-12 pb-20 lg:pb-32 lg:pt-20 px-2 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-2 ",
          className
        )}
      >
        <div className="">
          <Picture
            className="w-64 h-96 sm:w-94 sm:h-128 md:w-120 md:h-128 lg:w-160 lg:h-192 "
            src={pic1.src}
            alt={pic1.alt}
          />
        </div>
        <div className="justify-self-end relative lg:h-108 ">
          <Picture
            className="w-48 h-68 sm:w-68 sm:h-104 md:w-88 md:h-136 lg:w-78 lg:h-108 z-10"
            src={pic2.src}
            alt={pic2.alt}
          />
          <Circle className="absolute bottom-0 right-0 translate-y-1/2   -translate-x-1/2 z-0 lg:size-80" />
        </div>
      </div>
    );
  };
  
  export const Location = ({ children, className = "" }) => {
    return (
      <motion.p
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
          },
        }}
        className={twMerge(
          "location uppercase  text-center text-lg font-medium tracking-wide",
          className
        )}
      >
        {children}
      </motion.p>
    );
  };
  
  export const Circle = ({ className = "" }) => {
    const scope = useRef();
    const inView = useInView(scope, {
      margin: "-70px",
      once: true,
    });
    return (
      <div
        ref={scope}
        className={twMerge(
          `bg-primary/20 absolute rounded-full size-32 sm:size-64 traansform transition-all duration-500 ease-springy ] ${
            inView ? "scale-100" : "scale-0"
          }`,
          className
        )}
      ></div>
    );
  };
  
  export const TwoImagesRotatingWithScroll = ({ pic1, pic2, className = "" }) => {
    const scope = useRef(null);
    const { scrollYProgress } = useScroll({
      target: scope,
      offset: ["start end", "end end"],
    });
  
    const rotate = useTransform(scrollYProgress, [0, 1], [-12, -2]);
    return (
      <div
        ref={scope}
        className={twMerge(
          "relative flex h-[60vh] lg:h-[120vh] justify-center items-center py-28 sm:py-44 md:pt-38 md:pb-52 ",
          className
        )}
      >
        <div className="w-78 h-52 sm:w-112 sm:h-74 md:w-144 md:h-78 lg:w-200 lg:h-120 absolute top-0 left-[40%] z-20 rotate-6">
          <Picture src={pic1.src} alt={pic1.src} className="w-full h-full" />
        </div>
        <motion.div
          className="w-78 h-52 sm:w-112 sm:h-74 md:w-144 md:h-78 lg:w-200 lg:h-120 absolute top-1/3 right-[40%] z-20"
          style={{
            rotate: rotate,
           
          }}
        >
          <Picture className="w-full h-full" src={pic2.src} alt={pic2.src} />
        </motion.div>
        <Circle className="size-80 sm:size-100 md:size-120 lg:size-160 lg:translate-x-1/2 top-6 left-12 lg:top-0 z-10" />
      </div>
    );
  };
  
  export const BigPicture = () => {
    return (
      <div className=" lg:my-32 relative">
        <Picture
          src={img3}
          className="w-68 h-84  md:w-78  ml-5 lg:w-200 lg:h-144"
        />
        <Circle className="top-0 right-0" />
      </div>
    );
  };
  export const OneBigPicture = ({ pic1, className = "" }) => {
    return (
      <div
        className={twMerge(
          "flex justify-center items-center px-2 container mx-auto py-8",
          className
        )}
      >
        <Picture
          src={pic1.src}
          alt={pic1.alt}
          className="w-100 h-66 sm:w-160 sm:h-100 md:w-176 md:h-120 lg:w-[80rem] lg:h-[40rem]"
        />
      </div>
    );
  };
  export const SmallPicture = () => {
    return (
      <div className="my-16  lg:my-32 lg:ml-4 relative ml-2">
        <Picture
          src={img3}
          className="w-80 h-80 md:w-120 md:h-80 lg:w-152 lg:h-100 z-20"
        />
        <Circle className="bottom-0 left-0 translate-y-1/2 -translate-x-1/2 z-10" />
      </div>
    );
  };
  
  export const Triplet = ({ pic1, pic2, pic3 }) => {
    const [control, animate] = useAnimate();
    const isInview = useInView(control, {
      once: true,
      margin: "-70px",
    });
    useEffect(() => {
      const triggerPicture = () => {
        if (isInview) {
          animate(
            ".img",
            { y: ["120%", "0%"], rotate: ["0deg", "var(--rotate-to)"] },
            { duration: 0.5, delay: stagger(0.1) }
          );
        }
      };
  
      triggerPicture();
    }, [isInview, animate, control]);
  
    return (
      <div
        ref={control}
        className="flex justify-center items-center -gap-1 lg:gap-0 relative  lg:pt-20 lg:pb-24"
      >
        <Picture
          src={pic1?.src}
          alt={pic1?.alt}
          className="img relative w-36 h-52 sm:w-52 sm:h-78  md:w-66 md:h-96 lg:w-76 lg:h-100 translate-y-full z-20
          [--rotate-to:-5deg]
          [--y-to:-0%]"
        />
  
        <Picture
          src={pic2?.src}
          alt={pic2?.alt}
          className="img img-2 relative w-36 h-52  sm:w-52 sm:h-78 md:w-66 md:h-96 lg:w-76 lg:h-100 translate-y-full  z-20
          [--rotate-to:0deg]
          [--y-to:-0%]"
        />
  
        <Picture
          src={pic3?.src}
          alt={pic3?.alt}
          className="img img-3 relative w-36 h-52  sm:w-52 sm:h-78 md:w-66 md:h-96 lg:w-76 lg:h-100 translate-y-full  z-20
          [--rotate-to:5deg]
          [--y-to:-0%]"
        />
  
        <Circle className="top-0 right-0  md:-translate-x-1/4 translate-y-1/2 md:-translate-y-1/4 z-10" />
      </div>
    );
  };
  
 export const Heading = ({ text, className = "" }) => {
    const ctrls = useAnimationControls();
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, {
      once: true,
      margin: "-70px",
    });
    useEffect(() => {
      const animateHeading = () => {
        if (isInView) {
          ctrls.start("visible");
        }
      };
      animateHeading();
    }, [isInView, ctrls]);
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
        <div
          className={twMerge(
            "flex flex-col justify-center items-center my-2 text-6xl sm:text-9xl  font-medium tracking-wider  mx-auto pt-12 pb-11 md:pt-20 md:pb-16 lg:pt-28 lg:pb-20 ",
            className
          )}
        >
          <h2
            className="inline-block text-center  "
            aria-label={text}
            role="heading"
            ref={inViewRef}
          >
            <span className="sr-only">{text}</span>
            {text.split(" ").map((word, index) => {
              return (
                <motion.span
                  className="inline-block whitespace-nowrap text-balance not-sr-only"
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={ctrls}
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {/* <span className="invisible text-5xl">{"h"}</span> */}
                  &nbsp;
                  {word.split("").map((character, index) => {
                    return (
                      <motion.span
                        className="inline-block uppercase"
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
        </div>
      </>
    );
  };
  
  export const RoundedText = () => {
    return (
      <div className="absolute h-screen w-screen z-60">
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="size-32 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text className="fill-primary">
              <textPath xlinkHref="#circlePath" className="text-base">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <span
            href="/contact"
            className="size-40 absolute top-0 left-0 right-0 bottom-0 m-auto bg-primary/20 text-white rounded-full flex items-center justify-center"
          />
        </div>
      </div>
    );
  };
  export const Contact = ({ pic1, pic2 }) => {
    const container = {
      animate: {
        transition: {
          staggerChildren: 0.075,
        },
      },
    };
    const variants = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };
  
    return (
      <section className=" relative  my-40 h-screen">
        <div className="relative">
          <Picture
            src={pic1?.src}
            alt={pic1?.alt}
            className="w-44 h-68 sm:w-66 sm:h-100 md:w-72 lg:w-100 lg:h-120 rotate-12 left-0 lg:left-4 absolute top-1/2 -translate-x-1/2"
          />
          <Picture
            src={pic2?.src}
            alt={pic2?.alt}
            className="w-44 h-68 sm:w-66 sm:h-100  md:w-72 lg:w-100 lg:h-120 -rotate-12 right-0 lg:right-4 absolute lg:top-1/2 top-72 translate-x-1/2"
          />
        </div>
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-primary text-4xl">
          <motion.h1
            className="text-4xl  font-normal text-center text-primary md:hidden relative z-50"
            initial="initial"
            animate="animate"
            variants={container}
          >
            <motion.p variants={variants}>You&apos;re, looking </motion.p>
            <motion.p variants={variants}>wedding photographer Send</motion.p>
  
            <AnimatedPicture />
            <motion.p variants={variants} className="mt-2">
              me your wishes.
            </motion.p>
          </motion.h1>
  
          {/* lg screen */}
          <motion.h1
            className="text-5xl font-normal text-center hidden text-primary text-balance  md:block leading- space-y-5 relative z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="block">You are looking for a wedding</p>
            <div className="inline-flex justify-center items-center space-x-5">
              <span>photographer?</span>
              <AnimatedPicture />
              <span>Send</span>
            </div>
            <p className="block text"> me your wishes.</p>
          </motion.h1>
        </div>
      </section>
    );
  };
  
  export const Footer = () => {
    return (
      <footer className="container mx-auto py-5 text-center text-primary px-6 ">
        <p>
          {" "}
          @ 2023 Sohrab Khan. All rights reserved. Website made by Framer motion.
        </p>
  
        {/* <button className="bg-white text-red-400 hover:scale-125 shadow-lg  font-bold py-2 px-4 border border-primary rounded-full ">
          BackToTop{" "}
        </button> */}
      </footer>
    );
  };
  export const Nav = ({
    scrollDirection,
    scrollValue,
    exit,
    nextWedding,
    prevWedding,
    theme,
  }) => {
    const [activeSideBar, setActiveSideBar] = useState(false);
    const [control, animate] = useAnimate();
    useEffect(() => {
      const navAnim = () => {
        animate(
          ".anim",
          { opacity: [0, 1] },
          { duration: 0.6, delay: stagger(0.15) }
        );
      };
      navAnim();
    }, [activeSideBar, animate]);
  
    return (
      <>
        <div
          ref={control}
          className={`scroll fixed inset-0   h-screen w-screen  bg-secondary ${theme} ${
            activeSideBar ? "z-30" : ""
          } `}
        >
          <div
            className={`relative h-full w-full bg-secondary z-60 lg:hidden flex justify-center items-center flex-col  transition-transform duration-300 space-y-4 ${
              activeSideBar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="anim opacity-0  relative w-24 h-16 z-70">
              <Image
                fill
                src={"/photos/camera.webp"}
                className="object-cover w-56 h-80 object-top rounded-xl"
                alt=""
              />
            </div>
            <div className="anim opacity-0 text-3xl font-normal text-center text-primary relative z-70">
              Still looking <br />
              for a wedding <br />
              photographer? <br />
              Send me <br />
              your wishes :)
            </div>
            <div className="anim opacity-0 flex flex-col gap-2 mt-4">
              <Button className="py-2 px-5 text-lg font-normal">
                Contact@gmail.com
              </Button>
              <Button className="py-2 px-5 text-lg font-normal">
                Follow me on Instagram
              </Button>
            </div>
            <div className="footer anim text-center text-sm mt-4 text-primary">
              @ 2023 Sohrab Khan. All rights reserved. <br />
              Website made by Framer motion.
            </div>
          </div>
        </div>
  
        <div
          className={`fixed bottom-5 right-1 md:right-2 lg:right-5 transition-all duration-1000 ease-springy ${
            scrollValue > 200 ? "opacity-0 invisible" : "opacity-100 visible"
          } `}
        >
          <button className="font-extrabold text-sm md:text-base text-start md:leading-[0.8] md:flex md:space-x-1">
            <motion.span
              initial={{
                height: 0,
              }}
              animate={{
                height: 32,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 -translate-x-full bg-primary w-1"
            />
            <span className=" text-primary hidden md:block">
              SCROLL <br />
              TO EXPLORE{" "}
            </span>
            <span className=" text-primary rotate-90 block  -ml-4  md:hidden">
              SCROLL
            </span>
          </button>
        </div>
  
        <div
          className={`fixed inset-0 w-full  duration-300 transition-all z-100 
          ${
            scrollValue > 200 && scrollDirection === 1
              ? "-translate-y-24"
              : "-translate-y-0"
          }
          `}
        >
          <button className="btn btn-1 opacity-0 text-2xl font-extrabold z-70 absolute top-5 left-8 text-primary">
            <Link href="/">Logo</Link>
          </button>
          <button
            className="btn btn-1 opacity-0 bg-white p-3 rounded-2xl absolute top-5 right-[9rem] text-primary transition-transform hover:scale-110 ease-springy duration-200 group overflow-hidden hidden lg:block"
            onClick={prevWedding}
          >
            <ArrowLeft
              className=" transition-all duration-200 ease-in-out
        -translate-x-[120%] group-hover:-translate-x-0
        "
            />
            <ArrowLeft
              className=" transition-all duration-200 ease-in-out
        absolute top-0 translate-y-1/2 group-hover:translate-x-[120%]
        "
            />
          </button>
  
          <button
            className="btn btn-1 opacity-0 bg-white p-3 rounded-2xl absolute top-5 right-20 text-primary transition-transform hover:scale-110 ease-springy duration-200 group overflow-hidden hidden lg:block"
            onClick={nextWedding}
          >
            <ArrowRight
              className=" transition-all duration-200 ease-in-out
        -translate-x-[120%] group-hover:-translate-x-0 
        "
            />
            <ArrowRight
              className=" transition-all duration-200 ease-in-out
        absolute top-0 translate-y-1/2 group-hover:translate-x-[120%]
        "
            />
          </button>
  
          <button
            className={`btn btn-1  opacity-0 bg-white p-3 rounded-2xl absolute top-5 right-20 lg:right-5 text-primary transition-transform hover:scale-110 ease-springy duration-200 group block z-50 ${
              activeSideBar && "hidden"
            }`}
            onClick={exit}
          >
            <Cross className="group-hover:rotate-180 transition-all duration-200 ease-in" />
          </button>
  
          <div className="absolute right-4 top-5 lg:hidden z-70">
            <Button
              className="btn  group hover:scale-110 transition-transform duration-200 ease-springy flex justify-center items-center overflow-hidden z-100"
              onClick={() => setActiveSideBar(!activeSideBar)}
            >
              <Hamburger
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transform transition-transform duration-300 ease-springy ${
                  activeSideBar ? "translate-y-full" : ""
                }`}
              />
              <Cross
                className={`absolute top-0 left-0 font-extrabold translate-x-1/2 -translate-y-full transform transition-transform duration-300 ease-springy ${
                  activeSideBar ? "translate-y-1/2" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </>
    );
  };
  
  export const MainImage = ({ mainImage }) => {
    return (
      <div className="picture-1 flex flex-col justify-center items-center relative ">
        <motion.div
          layoutId="main-picture"
          // initial={{ y: "100%" }}
          // animate={{ y: "0%", transition: { duration: 0.6 } }}
          // style={{ width: "2500px", height: "3750px" }}
          transition={{
            layout: { duration: 0.6 },
          }}
          className="relative w-66 h-100 sm:w-94 sm:h-136 md:w-120 md:h-176 lg:w-152 lg:h-176 z-20"
        >
          <Picture
            src={mainImage.src}
            alt={mainImage.alt}
            className="absolute w-full h-full"
          />
        </motion.div>
        <Circle className=" right-1/4 translate-x-1/2 top-0 -translate-y-1/2 z-10" />
        <Circle className=" left-0 size-160 bottom-0 z-10" />
      </div>
    );
  };
  