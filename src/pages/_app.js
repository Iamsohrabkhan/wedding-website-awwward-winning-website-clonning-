import { ContextProvider, useAppContext } from "@/App-Context/context";
import Navbar from "@/components/Navbar";
import TailwindIndicator from "@/components/TailwindIndicator";
import "@/styles/globals.css";
import { Lora } from "next/font/google";
import Preloader from "@/components/preloader";
import { Suspense, useEffect, useState } from "react";
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
        canonical="https://wedding-tempalate-mu.vercel.app/"
        openGraph={{
          url: "https://i.ibb.co/P9541VY/opengraph-image.png",
          title: "Capturing Raw Emotions Against Captivating Landscapes",
          description:
            "Discover the magic of Elena's Italian wedding photography, where raw emotions meet captivating landscapes, creating timeless memories.",
          images: [
            {
              url: "https://i.ibb.co/P9541VY/opengraph-image.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
            {
              url: "https://i.ibb.co/P9541VY/opengraph-image.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/png",
            },
            { url: "https://i.ibb.co/P9541VY/opengraph-image.png" },
            { url: "https://i.ibb.co/P9541VY/opengraph-image.png" },
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

  return isLoading ? (
    <Suspense fallback={<Loader />}>
      <Preloader />
    </Suspense>
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
};
