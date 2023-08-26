import { ReactElement } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from "lodash";
import SourceCode from "../dropdown/source-code";
import { RxExternalLink } from "react-icons/rx";
import { PROJECT_DATA } from "@/conts";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import { PORJECT_VARIANT } from "@/animations";
import { TbArrowBarToDown } from "react-icons/tb";

const ProjectList = (): ReactElement => {
  return (
    <>
      {_.map(PROJECT_DATA, (data, index) => {
        return (
          <motion.div
            variants={PORJECT_VARIANT}
            initial="default"
            whileInView="animate"
            viewport={{ once: true }}
            key={data.id}
            className={`flex md:p-6 p-4 shadow-sm md:rounded-2xl rounded-lg border ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } ${
              index + 1 === PROJECT_DATA.length
                ? "md:mb-0 mb-0"
                : "md:mb-12 mb-6"
            } flex-col items-center w-full `}
          >
            <div
              className={`md:w-[50%] w-full ${
                index % 2 === 0 ? "md:mr-6" : "md:ml-6"
              } mb-4 md:mb-0 shadow-md overflow-hidden rounded-xl flex items-center h-[300px] justify-center object-cover object-center bg-slate-200`}
            >
              <Image
                src={data.cover_image}
                className="w-full object-cover h-full object-center transition hover:scale-110 ease-in-out duration-300 cursor-pointer"
                alt={data.name}
              />
            </div>

            <div className="flex-1 w-full">
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
      })}
    </>
  );
};

export default ProjectList;
