import { ReactElement, useState } from "react";
import Image from "next/image";
import _ from "lodash";
import { PROJECT_DATA } from "@/conts";
import { AnimatePresence, motion } from "framer-motion";
import { OPACITY_VARIANT } from "@/animations";
import ProjectModal from "../modal/project-modal";

const ProjectGrid = (): ReactElement => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [currProjectId, setCurrProjectId] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap w-full items-center justify-between mt-8">
      {_.map(PROJECT_DATA, (data, index) => {
        return (
          <>
            <motion.div
              onClick={() => {
                setShowModal(true);
                setCurrProjectId(data.id);
              }}
              variants={OPACITY_VARIANT(index + 1)}
              initial="default"
              animate="animate"
              onMouseEnter={() => {
                setIsHover(true);
                setCurrIndex(data.id);
              }}
              onMouseLeave={() => setIsHover(false)}
              className="cursor-pointer w-full md:w-[49%] h-[250px] bg-slate-200 rounded-xl  mb-3 md:mb-[2%] relative overflow-hidden border shadow-md transition"
            >
              <Image
                src={data.cover_image}
                alt="wew"
                className={`transition ${
                  isHover ? "hover:scale-110" : "hover:scale-100"
                } ease-in-out duration-300 object-cover object-center w-full h-full`}
              />
              <AnimatePresence mode="wait">
                {isHover && index + 1 === currIndex && (
                  <motion.div
                    variants={OPACITY_VARIANT()}
                    initial="default"
                    animate="animate"
                    exit="default"
                    className="select-auto flex items-end p-4 bg-gradient-to-t from-[#4a4dad] to-transparent w-full h-[50%] absolute bottom-0 left-0"
                  >
                    <p className="text-white font-semibold">{data.name}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        );
      })}
      <AnimatePresence>
        {showModal && (
          <ProjectModal
            currProjectId={currProjectId}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;
