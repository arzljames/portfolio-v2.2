import { ReactElement } from "react";
import { motion } from "framer-motion";

const ArrowIcon = (): ReactElement => {
  return (
    <>
      <motion.svg
        width="73"
        height="48"
        viewBox="0 0 73 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ opacity: 1, pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          d="M71.5229 10.6579C67.8955 6.48617 60.5752 4.78916 55.4316 3.57227C48.7074 1.98148 41.6369 0.786821 35.955 5.74787C31.7525 9.41718 30.3161 15.1707 30.5131 20.585C30.6604 24.6321 32.3562 35.5925 38.1137 35.3827C42.1259 35.2364 45.0363 30.5318 45.1952 26.8819C45.4629 20.7361 40.0093 16.2314 34.5383 14.8213C27.6343 13.0418 20.1964 14.8234 15.1575 19.9543C8.66136 26.569 6.37269 35.6963 5.16054 44.5883"
          stroke="#6F74F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.71962 44.3868C4.83166 44.3804 4.98211 44.3033 5.08702 44.3665C5.12984 44.3923 5.21656 44.6367 5.11392 44.5782C4.81762 44.4093 4.58112 43.8301 4.40586 43.5296C3.36311 41.7416 2.36732 39.9167 1.31461 38.1378"
          stroke="#6F74F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.16048 44.5883C5.2335 44.4687 5.29223 44.4139 5.41207 44.3528C5.78714 44.1614 6.06702 43.7272 6.35358 43.4292C7.90229 41.8185 9.50205 40.2687 11.0225 38.6273"
          stroke="#6F74F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
    </>
  );
};

export default ArrowIcon;
