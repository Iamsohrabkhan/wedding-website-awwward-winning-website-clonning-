import AlignedImages from "./alignedImages";
import Heading from "./heading";
import {
  AnimatePresence,
  useAnimate,
  useAnimationControls,
} from "framer-motion";
import { useAppContext } from "@/App-Context/context";
import { useRouter } from "next/router";
import { stagger } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "../Navbar";

const Hero = () => {
  const { setExitAnimation } = useAppContext();
  const [ref, animate] = useAnimate();
  const themeRef = useRef();
  const controlClipPath = useAnimationControls();
  const rout = useRouter();

  const changeUrl = () => {
    setExitAnimation(false);
    animate(
      ".text",
      { opacity: 0, y: "-100%" },
      { duration: 0.3, delay: stagger(0.075) }
    )
      .then(() => {
        animate(".btn", { opacity: 0, scale: 0 }, { duration: 0.3 });
      })
      .then(() => {
        rout.push("wedding");
      });
  };
  // const themes = ["light", "blue", "pink"];
  const themeSwitcher = () => {
    controlClipPath.start("visible");

    const element = themeRef.current;
    if (element.classList.contains("light")) {
      element.classList.remove("light");
      element.classList.add("blue");
    } else if (element.classList.contains("blue")) {
      element.classList.remove("blue");
      element.classList.add("pink");
    } else {
      element.classList.remove("pink");
      element.classList.add("light");
    }
  };
  const animationCompleted = () => {
    controlClipPath.set("hidden");
    const element = ref.current;

    if (element.classList.contains("light")) {
      element.classList.remove("light");
      element.classList.add("blue");
    } else if (element.classList.contains("blue")) {
      element.classList.remove("blue");
      element.classList.add("pink");
    } else {
      element.classList.remove("pink");
      element.classList.add("light");
    }
  };

  return (
    // <AnimatePresence>
    <section
      ref={ref}
      className={`relative flex  justify-center light      
       items-center h-svh w-full      
      `}
    >
      <Navbar />
      <div className={`bg-secondary h-full w-full absolute inset-0`} />
      <motion.div
        ref={themeRef}
        className={`theme bg-secondary light h-full w-full absolute inset-0`}
        variants={{
          hidden: {
            clipPath: "circle(0% at 50% 50%)",
          },
          visible: {
            clipPath: "circle(80% at 50% 50%)",
            transition: {
              duration: 0.5,
              ease: "easeOut",
              // type:"tween"
            },
          },
        }}
        animate={controlClipPath}
        initial="hidden"
        onAnimationComplete={animationCompleted}
      />

      <Heading changeUrl={changeUrl} themeSwitcher={themeSwitcher} />
      <AlignedImages />
    </section>
    // </AnimatePresence>
  );
};

export default Hero;
