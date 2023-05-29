import React from "react";
import _ from "lodash";
import { EXP_DATA } from "@/conts";
import {
  IoBriefcase,
  IoBusiness,
  IoCalendarNumber,
  IoLocation,
} from "react-icons/io5";
import { HiCodeBracketSquare } from "react-icons/hi2";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { OPACITY_2_VARIANT } from "@/animations";

type IExperience = {
  id: number;
  tag: string;
  company_name: string;
  position: string;
  date: string;
  responsibilities: string[];
  location: string;
  length_of_service: string;
  tech_stacks: any[];
};

const ExperienceCard = ({ activeTab }: { activeTab: string }) => {
  return (
    <>
      {_.map(
        _.filter(EXP_DATA, (item: IExperience) => {
          return item.tag === activeTab;
        }),
        (data: IExperience) => {
          return (
            <motion.div
              variants={OPACITY_2_VARIANT}
              initial="default"
              animate="animate"
              exit="default"
              className="w-full"
              key={data.id}
            >
              <div className="p-4 bg-slate-100 rounded-xl overflow-y-auto w-full mb-2 min-h-[220px]">
                <h2 className="text-text-main font-bold">
                  {data.company_name}
                </h2>
                <h3 className="text-text-sub mb-4 font-medium">
                  {data.position}
                  <span className="font-normal text-sm"> {data.date}</span>
                </h3>
                <ul className="text-text-main list-disc pl-10">
                  {_.map(data.responsibilities, (res: string) => {
                    return <li key={res}>{res}</li>;
                  })}
                </ul>
              </div>
              <div className="p-4 bg-slate-100 rounded-xl overflow-y-auto w-full flex md:flex-row flex-col">
                <div className="md:w-[50%] mb-3 w-full md:mb-0">
                  <div className="mb-3">
                    <div className="flex items-center">
                      <span className="text-main-color mr-2">
                        <IoBusiness />
                      </span>
                      <span className="text-text-main font-semibold text-sm">
                        Company Name
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-transparent mr-2">
                        <IoBusiness />
                      </span>
                      <p className="text-text-main text-sm">
                        {data.company_name}
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center">
                      <span className="text-main-color mr-2">
                        <IoLocation />
                      </span>
                      <span className="text-text-main font-semibold text-sm">
                        Location
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-transparent mr-2">
                        <IoLocation />
                      </span>
                      <p className="text-text-main text-sm">{data.location}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-main-color mr-2">
                        <IoBriefcase size={14} />
                      </span>
                      <span className="text-text-main font-semibold text-sm">
                        Position
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-transparent mr-2">
                        <IoBriefcase size={14} />
                      </span>
                      <p className="text-text-main text-sm">{data.position}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[50%] w-full">
                  <div className="mb-3">
                    <div className="flex items-center">
                      <span className="text-main-color mr-2">
                        <IoCalendarNumber />
                      </span>
                      <span className="text-text-main font-semibold text-sm">
                        Length of Service
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-transparent mr-2">
                        <IoCalendarNumber />
                      </span>
                      <p className="text-text-main text-sm">
                        {data.length_of_service}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-main-color mr-2">
                        <HiCodeBracketSquare />
                      </span>
                      <span className="text-text-main font-semibold text-sm">
                        Tech Stacks
                      </span>
                    </div>

                    <div className="flex items-center w-full">
                      <span className="text-transparent mr-2">
                        <HiCodeBracketSquare />
                      </span>

                      <Slider
                        className="w-[90%]"
                        speed={750}
                        dots={false}
                        arrows={false}
                        slidesToShow={data.tech_stacks.length > 2 ? 4 : 2}
                        slidesToScroll={data.tech_stacks.length > 2 ? 4 : 2}
                      >
                        {_.map(data.tech_stacks, (img: any) => {
                          return (
                            <div
                              key={img.name}
                              className="flex flex-col items-center justify-center w-auto mr-6 mt-4"
                            >
                              <Image
                                src={img.path}
                                alt={img.name}
                                width={35}
                                height={35}
                              />
                              <p className="text-text-main text-xs font-medium mt-1">
                                {img.name}
                              </p>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        }
      )}
    </>
  );
};

export default ExperienceCard;
