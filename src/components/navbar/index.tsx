"use client";
import { ReactElement, useEffect, useState } from "react";
import Brand from "./brand";
import Navlinks from "./nav-links";
import { useNavScroll } from "@/hooks/useNavScroll";
import { AnimatePresence, motion } from "framer-motion";
import { NAVBAR_VARIANT, NAVBAR_WRAPPER_VARIANT } from "@/animations";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../drawer";

const Navbar = (): ReactElement => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  useNavScroll({ scrollPosition, setScrollPosition });
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [scrollPosition]);
  return (
    <>
      <motion.nav
        variants={NAVBAR_VARIANT}
        initial="default"
        animate={scrollPosition > 75 ? "animate" : "default"}
        exit="default"
        className="z-50 h-20 w-full bg-transparent fixed top-0 flex items-center  justify-center"
      >
        <motion.div
          variants={NAVBAR_WRAPPER_VARIANT}
          initial="default"
          animate={
            scrollPosition > 75 && windowWidth > 767 ? "animate" : "default"
          }
          exit="default"
          className="flex items-center justify-between md:px-20 px-3"
        >
          <Brand scrollPosition={scrollPosition} />
          <Navlinks scrollPosition={scrollPosition} />
          <div
            onClick={() => setIsDrawerOpen(true)}
            className="w-10 h-10 md:hidden hover:bg-[#eaeaec] cursor-pointer transition flex items-center justify-center bg-hero  rounded-full text-text-main"
          >
            <RxHamburgerMenu />
          </div>
        </motion.div>
      </motion.nav>
      <AnimatePresence>
        {isDrawerOpen && <Drawer setIsDrawerOpen={setIsDrawerOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
