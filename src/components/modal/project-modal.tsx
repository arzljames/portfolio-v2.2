import useClickOutside from "@/hooks/useClickOutside";
import { Dispatch, ReactElement, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";
import { PROJECT_MODAL_VARIANT } from "@/animations";
import { IoClose } from "react-icons/io5";
import _ from "lodash";
import { PROJECT_DATA } from "@/conts";
import Image from "next/image";
import SourceCode from "../dropdown/source-code";
import { RxExternalLink } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
import { TbArrowBarToDown } from "react-icons/tb";
import Flickity from "react-flickity-component";
import "../../app/flickity.css";

type IProjectModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  currProjectId: number;
};

const ProjectModal = ({
  setShowModal,
  currProjectId,
}: IProjectModalProps): ReactElement => {
  const ref = useRef(null);
  useClickOutside(ref, () => setShowModal(false));
  return (
    <div className="fixed w-full h-[100vh] bg-[#00000012] backdrop-blur-sm  top-0 left-0 z-50 overflow-y-auto flex items-center justify-center">
      {_.map(
        _.filter(PROJECT_DATA, (item) => {
          return item.id === currProjectId;
        }),
        (data) => {
          return (
            <motion.div
              ref={ref}
              variants={PROJECT_MODAL_VARIANT}
              initial="default"
              animate="animate"
              exit="default"
              className="w-full h-full rounded-none min-w-[250px] md:min-w-[500px] md:w-[40%] md:h-[95%] bg-white md:rounded-xl shadow-md relative p-3 flex flex-col"
            >
              <div
                onClick={() => setShowModal(false)}
                className="bg-[#00000044] hover:bg-[#00000054] w-8 h-8 rounded-full absolute right-1 top-1 cursor-pointer text-white flex items-center justify-center transition"
              >
                <IoClose size={20} />
              </div>
              <div className="w-full h-[60%] bg-slate-200 rounded-lg overflow-hidden mb-4">
                {/* <Image
                  src={data.cover_image}
                  alt="wew"
                  className="transition ease-in-out duration-300 object-cover object-center w-full h-full"
                /> */}
                <Flickity
                  className={"carousel"} // default ''
                  elementType={"div"} // default 'div'
                  disableImagesLoaded={false} // default false
                  reloadOnUpdate // default false
                  static // default false>
                >
                  <img src="https://placeimg.com/640/480/animals" />
                  <img src="https://placeimg.com/640/480/nature" />
                  <img src="https://placeimg.com/640/480/architecture" />
                </Flickity>
              </div>
              <div className="overflow-y-auto flex-1">
                <h2 className="font-bold text-text-main mb-2 text-lg">
                  {data.name}
                </h2>
                <p className="text-text-main mb-4">{data.description}</p>
                <div className="flex flex-wrap w-full mb-4 items-center">
                  {_.map(data.tech_stack, (item, index) => {
                    return (
                      <>
                        <p className="text-sm font-medium text-main-color-dark">
                          {item}
                        </p>
                        {index + 1 !== data.tech_stack.length && (
                          <BsDot className="text-main-color-dark" />
                        )}
                      </>
                    );
                  })}
                </div>

                <div className="flex">
                  <SourceCode sc_links={data.source_code} />

                  {data.live_demo && (
                    <button
                      onClick={() => window.open(data.demo_link)}
                      id="download-btn"
                      className="ml-2 border-main-color border-[1px] text-main-color text-sm font-medium py-2 px-3 rounded-lg flex items-center"
                    >
                      Live Demo
                      <RxExternalLink className="ml-2" />
                    </button>
                  )}
                  {data.downloadable && (
                    <button
                      onClick={() => window.open(data.downloadable_link)}
                      id="download-btn"
                      className="ml-2 border-main-color border-[1px] text-main-color text-sm font-medium py-2 px-3 rounded-lg flex items-center"
                    >
                      Download
                      <TbArrowBarToDown size={16} className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        }
      )}
    </div>
  );
};

export default ProjectModal;
