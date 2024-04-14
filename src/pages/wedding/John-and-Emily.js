
import { useEffect,  useState } from "react";
import { useAnimate } from "framer-motion";
import { stagger } from "framer-motion";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";
import { useDataContext } from "@/App-Context/datafilter";
import { getData } from "@/components/lib/getData";
import { getNextSlug, getPreviousSlug } from "@/components/lib/getNextAndPreviousSlug";
import { Circle, Contact, Footer, Location, MainImage, Nav, OneBigPicture, OnePictureLieInCenter, OneSingleImage, OneVideoOnePicture, ThreeImagesOneisBigTwoEqual, Triplet, TwoImagesRotatingWithScroll, TwoPicturesOneBigOneSmall,Heading } from "@/components/wedding detailed pages/singlepage";
const Marison = () => {
  const router = useRouter();
  const previousRoute = router.asPath;

  // const cameFromWeddingPage = previousRoute.includes("/wedding");
  // console.log("🚀 ~ Marison ~ cameFromWeddingPage:", cameFromWeddingPage)
  const [scrollDirection, setScrollDirection] = useState(1);
  const [scrollValue, setscrollValue] = useState(0);
  const [scope, animate] = useAnimate();
  const { currentWedding } = useDataContext();
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      setscrollValue(e.animatedScroll);
      setScrollDirection(e.direction);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const animateComponent = () => {
      animate(
        
          ".btn",
          {
            opacity: [0, 1],
          },
          { duration: 0.3, delay: stagger(0.075) },
        
      );
    };

    animateComponent();
  }, []);

  const exit = () => {
    animate(scope.current, { opacity: [1] }, { duration: 0.3 }).then(() => {
      router.back();
    });
  };




  const NextWedding = () => {
    animate(scope.current, { opacity: [1, 0] }, { duration: 0.3 }).then(() => {
        const currentSlug = router.pathname.split("/").pop(); // Get current slug
        const nextSlug = getNextSlug(currentSlug); // Get next slug
        if (nextSlug) {
            router.push(nextSlug); // Navigate to the next slug
        } else {
            // Handle case where there is no next slug
            console.log("No next wedding found.");
        }
    });
};

const PrevWedding = () => {
    animate(scope.current, { opacity: [1, 0] }, { duration: 0.3 }).then(() => {
        const currentSlug = router.pathname.split("/").pop(); // Get current slug
        const prevSlug = getPreviousSlug(currentSlug); // Get previous slug
        if (prevSlug) {
            router.push(prevSlug); // Navigate to the previous slug
        } else {
            // Handle case where there is no previous slug
            console.log("No previous wedding found.");
        }
    });
};
  const wedding = getData(router);
  const { coupleName, location } = wedding;
  const sections = wedding.sections;

  if (!wedding) {
    return (
      <div className="flex justify-center items-center">Wedding not found</div>
    );
  }
  return (
    <main className={` bg-secondary ${currentWedding?.theme}`} ref={scope}>
      <Nav
        scrollValue={scrollValue}
        scrollDirection={scrollDirection}
        router={router}
        exit={exit}
        nextWedding={NextWedding}
        prevWedding={PrevWedding}
        theme={currentWedding?.theme}
      />
      <section className={`relative w-full container mx-auto `}>
        <Circle className=" lg:left-1/4 left-1/2 top-16 lg:-top-5 -translate-y-1/2 " />
        <Location className="pt-20">{location}</Location>
        <Heading text={coupleName} className="lg:pt-20 lg:pb-8" />

 
        <MainImage mainImage={currentWedding?.images[0]} />

   
        <Heading text={sections[0]?.heading} className="" />
        <Triplet
          pic1={sections[0]?.images[0]}
          pic2={sections[0]?.images[1]}
          pic3={sections[0].images[2]}
        />

        <Heading text={sections[1]?.heading} className="my-10" />
        <TwoPicturesOneBigOneSmall
          pic1={sections[1]?.images[0]}
          pic2={sections[1]?.images[1]}
        />

        <TwoPicturesOneBigOneSmall
          pic1={sections[1]?.images[2]}
          pic2={sections[1]?.images[3]}
        />

        <OnePictureLieInCenter
          className="pb-48"
          pic1={sections[1]?.images[4]}
        />

        <Heading text={sections[2]?.heading} />
        <OneBigPicture pic1={sections[2]?.images[0]} />
        <OnePictureLieInCenter className="" pic1={sections[2]?.images[1]} />
        <TwoImagesRotatingWithScroll
          pic1={sections[2]?.images[2]}
          pic2={sections[2]?.images[3]}
          className="mt-12 sm:mt-2 lg:mt-24"
        />
        <ThreeImagesOneisBigTwoEqual
          pic1={sections[2]?.images[4]}
          pic2={sections[2]?.images[5]}
          pic3={sections[2]?.images[6]}
          className="mt-20"
        />

        <Heading text={sections[3]?.heading} />
        <OneSingleImage pic1={sections[3]?.images[0]} />
        <OneVideoOnePicture pic1={sections[3]?.images[1]} />
      </section>
      <Contact pic1={sections[4].contact[0]} pic2={sections[4].contact[1]} />
      <Footer />
    </main>
  );
};

export default Marison;
