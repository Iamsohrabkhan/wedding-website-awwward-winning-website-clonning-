import Image from "next/image";
import Button from "./button";
import { Cross, Hamburger } from "./icon";
import React, { useEffect, useState } from "react";
import { animate, stagger } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  
  const router = useRouter();
  const [isSubPage, setIsSubPage] = useState(false);

  useEffect(() => {
    // Check if the current pathname contains "/wedding/"
    setIsSubPage(router.pathname.includes("/wedding/"));
  }, [router.pathname]);

  useEffect(() => {
    const animation = () => {
      animate(
        ".anim",
        { opacity: [0, 1] },
        { duration: 0.6, delay: stagger(0.15) }
      );
    };
    animation();
  }, [activeSideBar]);

  return (
      !isSubPage && (
    <>
        <div className="logo absolute top-4 left-8 text-2xl font-extrabold z-70">
          <Link href="/">Logo</Link>
        </div>
      
      <div className="absolute right-4 top-6 lg:hidden z-70">
        <Button
          className="btn  group hover:scale-110 transition-transform duration-200 ease-springy flex justify-center items-center overflow-hidden"
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

      {/* sidebar  */}
      <div
        className={`absolute h-full w-full bg-secondary z-60 lg:hidden flex justify-center items-center flex-col  transition-transform duration-300 space-y-4 ${
          activeSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="anim opacity-0  relative w-24 h-16 z-70">
          <Image
            fill
            src={"/photos/camera.webp"}
            className="object-cover object-top rounded-xl"
            alt=""
          />
        </div>
        <div className="anim opacity-0 text-3xl font-normal text-center text-primary">
          Still looking <br />
          for a wedding <br />
          photographer? <br />
          Send me <br />
          your wishes :)
        </div>
        <div className="anim opacity-0 flex flex-col gap-2 mt-4">
          <Button className="py-2 px-5 text-xl font-normal">
            Contact@gmail.com
          </Button>
          <Button className="py-2 px-5 text-xl font-normal">
            Follow me on Instagram
          </Button>
        </div>
        <div className="footer anim text-center text-sm mt-4 text-primary text-lg">
          @ 2023 Sohrab Khan. All rights reserved. <br />
          Website made by Framer motion.
        </div>
      </div>
        <footer
          className="hiddem lg:block text-xl absolute bottom-2 left-2  max-w-full container mx-auto  px-6
      z-50
      "
        >
          <div className=" items-center justify-between hidden lg:flex">
            <p>
              @ 2023 Sohrab Khan. All rights reserved. Website made by Framer
              motion.{" "}
            </p>
            <div className="space-x-1 ">
              <a
                className="text-sm cursor-pointer hover:opacity-50 hover:underline"
                href="instagram.com"
              >
                MAIL
              </a>
              <a
                className="text-sm  cursor-pointer  hover:opacity-50 hover:underline"
                href="instagram.com"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </footer>
     
    </>
    )
  );
};

export default Navbar;
