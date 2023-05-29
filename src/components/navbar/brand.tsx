import React, { ReactElement } from "react";
import { Source_Code_Pro } from "next/font/google";
import { motion } from "framer-motion";
import { NAVBAR_BRAND_VARIANT } from "@/animations";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: "800",
});

type IScrollPosition = {
  scrollPosition: number;
};

const Brand = ({ scrollPosition }: IScrollPosition): ReactElement => {
  return (
    <a href="#overview" className="cursor-pointer text-text-main">
      {"// "}
      <motion.span
        variants={NAVBAR_BRAND_VARIANT}
        initial="default"
        animate={scrollPosition > 75 ? "animate" : "default"}
        exit="default"
        className={`text-xl ${sourceCodePro.className} `}
      >
        ARZL JAMES
      </motion.span>
    </a>
  );
};

export default Brand;
