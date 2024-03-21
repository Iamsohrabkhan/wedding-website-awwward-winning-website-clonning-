// import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useAppContext } from "@/App-Context/context";
import Image from "next/image";
import Button from "../button";
import { twMerge } from "tailwind-merge";
import { ArrowDown } from "../icon";
import { useEffect, useRef } from "react";
const Heading = ({ changeUrl, themeSwitcher }) => {
  const [btnRef, animate] = useAnimate();
  const { setExitAnimation } = useAppContext();
  const audioRef = useRef(null);

  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0.6; // Start from the beginning
    audio.play();
  };

  useEffect(() => {
    const btnAnimation = () => {
      animate(".btn", { opacity: [0, 1], scale: [0, 1] }, { duration: 0.6 });
    };
    btnAnimation();
    setExitAnimation(true);
  }, []);

  return (
    <div ref={btnRef}>
      {/* smaal screen  */}
      <motion.h1
        className="text-3xl  font-normal text-center text-primary md:hidden relative z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
          
        <Text delay={0.1}>Hello I&apos;m, Elena,</Text>
        <Text className="" delay={0.2}>
        an Italian wedding
        </Text>
        <Text className="mb-2" delay={0.3}>
          {" "}
          photographer.
        </Text>
        <AnimatedPicture themeSwitcher={themeSwitcher} playSound={playSound} />
        <Text className="mt-2" delay={0.4}>
        My passion lies in
        </Text>
        <Text delay={0.5}> blending raw  </Text>
        <Text delay={0.6}> emotions photos.</Text>
        {/* <Text delay={0.7}> captivating landscapes </Text>
        <Text delay={0.8}> in my photos.</Text> */}
      </motion.h1>
      {/* large screen  */}
      <motion.h1
        className="text-4xl lg:text-5xl font-normal text-center hidden text-primary  md:block leading- space-y-5 relative z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <audio ref={audioRef} src="click.mp3"></audio>
        <Text delay={0.1}>Hello I&apos;m, Elena, an Italian wedding</Text>
        <Text
          delay={0.25}
          className="inline-flex justify-center items-center space-x-5"
        >
          photographer.
          <AnimatedPicture
            themeSwitcher={themeSwitcher}
            playSound={playSound}
          />
          <span>My passion lies </span>
        </Text>
        <Text delay={0.35}> in blending raw emotions with</Text>

        <Text delay={0.45}> beautiful in my photos.</Text>
      </motion.h1>

      <div className="flex justify-center items-center relative z-50 ">
        <Button
          className="btn opacity-0  group  flex justify-center items-center overflow-hidden"
          onClick={() => changeUrl()}
          onMouseEnter={() => {
            animate(".btn", { scale: [1, 1.1] });
          }}
          onMouseLeave={() => {
            animate(".btn", { scale: [1.1, 1] });
          }}
        >
          <ArrowDown className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-full transform transition-transform duration-300 ease-springy" />
          <ArrowDown className="absolute top-0 left-0 font-extrabold translate-x-1/2 -translate-y-full group-hover:translate-y-1/2 transform transition-transform duration-300 ease-springy" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;

export const Text = ({ children, delay, className = "" }) => {
  return (
    <motion.span
      className={twMerge("block text", className)}
      variants={{
        hidden: {
          opacity: 0,
          y: "100%",
        },
        visible: {
          opacity: 1,
          y: "0%",
          transition: {
            duration: 0.6,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.span>
  );
};

export const AnimatedPicture = ({ themeSwitcher, playSound }) => {
  const { handleFlash, flash, exitAnimation } = useAppContext();
  return (
    <motion.div
      onClick={() => {
        handleFlash(), playSound();
      }}
      className={`img relative  mx-auto w-0 h-0  overflow-hidden  rounded-3xl cursor-pointer bg-white
        z-100
       [--width:6rem] [--height:4rem] lg:[--width:7rem] lg:[--height:5rem] 
     `}
      variants={{
        initial: {
          width: 0,
          height: 0,
        },
        animate: {
          width: "var(--width)",
          height: "var(--height)",
        },
      }}
      animate={exitAnimation ? "animate" : "initial"}
      transition={{
        duration: 0.5,
        delay: exitAnimation ? 1.5 : 0,
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale: [1, 1.2, 1.4, 1],
          transition: { delay: 1.5, duration: 0.8 },
        }}
        onClick={themeSwitcher}
      >
        <button
          className={`absolute top-[50%] left-[37%] transform -translate-x-1/2 -translate-y-1/2   w-14 h-14  z-10 opacity-0 group ${
            flash && "linear opacity-100"
          }`}
        />
        <Image
          src={"/photos/camera.webp"}
          alt="t"
          fill
          className="object-top object-cover block group-hover:scale-125 "
        />
      </motion.div>
    </motion.div>
  );
};
