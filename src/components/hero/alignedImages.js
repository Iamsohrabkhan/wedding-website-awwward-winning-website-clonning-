import { useAppContext } from "@/App-Context/context";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
// w-44 h-64 sm:w-70 sm:h-104 md:w-104 md:h-152 lg:w-[13.6rem] lg:h-96
const Animatedimg = () => {
  const { active, exitAnimation, currentItems, springy, position } =
    useAppContext();

  return (
    <AnimatePresence>
      {active && exitAnimation && (
        <div
          className="absolute  h-full w-full overflow-hidden"
          key={Math.random()}
        >
          {/* first image  */}
          <motion.div
            className={`relative w-44 h-64 sm:w-70 sm:h-104 md:w-104 md:h-152 lg:w-[13.6rem] lg:h-96  
          [--top-from:-100%] [--top-to:-25%] 
          lg:[--top-to:-45%] 
          ${
            position
              ? "[--left-from:15%] lg:[--left-from:30%]"
              : "[--left-from:50%] lg:[--left-from:60%]"
          }
          
          [rotate-from:0deg] [rotate-to:30deg]
          
          `}
            initial={{
              top: "var(--top-from)",
              position: "absolute",
              left: "var(--left-from)",
              rotate: "0deg",
            }}
            animate={{
              top: "var(--top-to)",
              rotate: "-20deg",
              transitionDelay: 0.5,
            }}
            exit={{
              top: "var(--top-from)",
              left: "var(--left-from)",
              transition: {
                duration: 0.8,
              },
            }}
            transition={{
              duration: 0.9,
              ease: springy,
              type: "spring",
            }}
          >
            <Image
              alt={"alt"}
              src={currentItems[0].src}
              fill
              className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
            />
          </motion.div>

          {/* 2nd image  */}
          <motion.div
            className={`relative w-44 h-64 sm:w-70 sm:h-104 md:w-104 md:h-152 lg:w-[13.6rem] lg:h-96 
          [--right-from:100%] 
          ${
            position
              ? "[--top-from:25%] lg:[--top-from:15%] "
              : "[--top-from:40%] lg:[--top-from:30%]"
          }
          [--right-to:-25%] sm:[--right-to:-15%] md:[--right-to:-10%]
          lg:[--right-to:-5%]           
          `}
            initial={{
              position: "absolute",
              top: "var(--top-from)",
              right: "-100%",
              rotate: "0deg",
              bottom: "var(--top-from)",
            }}
            animate={{
              right: "var(--right-to)",
              rotate: "5deg",
              transitionDelay: 0.5,
            }}
            exit={{
              top: "var(--top-from)",
              right: "-100%",
              bottom: "var(--top-from)",
              transition: {
                duration: 0.8,
              },
            }}
            transition={{
              duration: 0.9,
              ease: springy,
              type: "spring",
            }}
          >
            <Image
              alt={"alt"}
              src={currentItems[1].src}
              fill
              className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
            />
          </motion.div>

          {/* third image  */}
          <motion.div
            className={`relative w-44 h-64 sm:w-70 sm:h-104 md:w-104 md:h-152 lg:w-[13.6rem] lg:h-96
           [--left-from:-100%] 
          ${
            position
              ? "[--top-from:40%] lg:[--top-from:25%]"
              : "[--top-from:20%] lg:[--top-from:10%]"
          }
          [--left-to:-35%] sm:[--left-to:-10%] md:[--left-to:-8%]
          lg:[--left-to:-7%]          
          `}
            initial={{
              position: "absolute",
              top: "var(--top-from)",
              left: "var(--left-from)",
              rotate: "0deg",
              bottom: "var(--top-from)",
            }}
            animate={{
              left: "var(--left-to)",
              rotate: "10deg",
              transitionDelay: 0.5,
            }}
            exit={{
              left: "var(--left-from)",
              top: "var(--top-from)",
              bottom: "var(--top-from)",
              transition: {
                duration: 0.8,
              },
            }}
            transition={{
              duration: 0.9,
              ease: springy,
              type: "spring",
            }}
          >
            <Image
              alt={"alt"}
              src={currentItems[2]?.src}
              fill
              className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Animatedimg;
