import { ContextProvider, useAppContext } from "@/App-Context/context";
import Navbar from "@/components/Navbar";
import TailwindIndicator from "@/components/TailwindIndicator";
import "@/styles/globals.css";
import { Lora } from "next/font/google";
import Preloader from "@/components/preloader";
import { useEffect, useState } from "react";
import { DataProvider } from "@/App-Context/datafilter";
import localFont from "next/font/local";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Loader from "@/components/loader";
import { LoaderImagesSrc } from "@/components/data/loaderImages";

const cyrene = localFont({
  src: "../../public/cyrene-regular.woff2",
  variable: "--font-cyrene",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Elena's Gallery"
        description="Elena, an Italian wedding photographer, skillfully intertwines raw emotions with mesmerizing landscapes in her captivating photography"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "/opengraph-image.png",
          title: "Capturing Raw Emotions Against Captivating Landscapes",
          description: "Discover the magic of Elena's Italian wedding photography, where raw emotions meet captivating landscapes, creating timeless memories.",
          images: [
            {
              url: "opengraph-image.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "opengraph-image.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "opengraph-image.png" },
            { url: "opengraph-image.png" },
          ],
          siteName: "Wedding Gularmine",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <ContextProvider>
        <DataProvider>
          <main
            className={` ${cyrene.className}  min-h-screen w-screen relative overflow-hidden select-none`}
          >
            <Main Component={Component} pageProps={pageProps} />
          </main>
          <TailwindIndicator />
        </DataProvider>
      </ContextProvider>
    </>
  );
}

const Main = ({ Component, pageProps }) => {
  const { isLoading } = useAppContext();

  const [allImagesReady, setAllImagesReady] = useState(true);

  // Function to load images asynchronously
  const loadImages = async () => {
    // Code to load images goes here
    // For example:

    const imagePromises = LoaderImagesSrc.map((imageUrl) => {
      console.log("🚀 ~ imagePromises ~ imageUrl:", imageUrl);
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = imageUrl;
      });
    });

    try {
      await Promise.all(imagePromises);
      console.log("All images loaded successfully!");
      setAllImagesReady(false);
    } catch (error) {
      // console.error('Error loading images:', error);
      setAllImagesReady(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []); //

  return allImagesReady ? (
    <Loader />
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
};
