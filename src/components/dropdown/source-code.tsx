import { ReactElement, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { DROPDOWN_VARIANT } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutside";

const SourceCode = (): ReactElement => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setShowDropdown(false));
  return (
    <div
      ref={ref}
      onClick={() => setShowDropdown(!showDropdown)}
      className="flex  relative bg-main-color text-white py-2 px-3 rounded-lg items-center cursor-pointer select-none transition hover:bg-main-color-dark"
    >
      <p className="text-sm font-medium mr-2">Source Code</p>
      {showDropdown ? (
        <IoChevronDownOutline size={14} />
      ) : (
        <IoChevronForwardOutline size={14} />
      )}
      <AnimatePresence mode="wait">
        {showDropdown && (
          <motion.div
            variants={DROPDOWN_VARIANT}
            initial="default"
            animate="animate"
            exit="default"
            className=" absolute left-0 top-[110%] border bg-white shadow-md py-1 rounded-lg w-full"
          >
            <p className="hover:border-l-main-color hover:text-main-color border-l-2 border-l-transparent rounded-tl-sm text-text-main text-sm  w-full h-8 flex items-center px-3 font-medium transition hover:bg-slate-100">
              <AiFillGithub className="mr-2" /> Frontend
            </p>
            <p className="hover:border-l-main-color hover:text-main-color border-l-2 border-l-transparent rounded-bl-sm text-text-main text-sm w-full h-8 flex items-center px-3 font-medium transition hover:bg-slate-100">
              <AiFillGithub className="mr-2" /> Backend
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SourceCode;
