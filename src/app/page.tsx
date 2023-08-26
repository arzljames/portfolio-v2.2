"use client";

import React, { useState } from "react";
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import bubble from "../assets/me-bubble.png";
import me from "../assets/me.png";
import ScrollIcon from "@/components/hero/scroll-icon";
import ContentIndicator from "@/components/hero/content-indicator";
import { CONTACT_DATA, CV_LINK, EXP_TABS } from "@/conts";
import _ from "lodash";
import ExperienceCard from "@/components/hero/experience-card";
import Footer from "@/components/footer";
import { TbArrowBarToDown, TbArrowNarrowRight } from "react-icons/tb";
import ProjectList from "@/components/project/project-list";
import Container from "@/components/container";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_EVEN_VARIANT, PROJECT_ODD_VARIANT } from "@/animations";
import Link from "next/link";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("Digitalroom");
  const [projectView, setProjectView] = useState<string>("List");
  const [arrowIcon, setArrowIcon] = useState<string>("Right");

  return (
    <main className="bg-white flex flex-col items-center w-full overflow-x-hidden">
      {/*<------- hero landing page ------->*/}
      <div
        id="overview"
        className="min-h-[100vh] w-full h-[100vh] md:flex-row items-center hero-page md:px-20 px-3 bg-hero"
      >
        <div className="relative flex md:flex-row flex-col-reverse justify-center md:justify-between md:items-center w-full h-full ">
          <div className="z-20">
            <p
              className={`text-slate-400 text-3xl hidden md:flex relative mb-2 after:content-[''] after:left-[50px] after:w-[150px] after:h-[1px] after:translate-y-[-50%] after:top-[50%] after:absolute after:bg-slate-400 ${sourceCodePro.className}`}
            >
              01
            </p>
            <h1 className="font-extrabold text-text-main text-3xl md:text-7xl mb-2 md:mb-6">
              FULL STACK <br />
              WEB<span className="web-dev"> DEVELOPER</span>
            </h1>
            <p className="text-text-main text-base md:text-2xl font-light">
              A Software Developer enthusiast based
              <br />
              in Zamboanga, Philippines.
            </p>
          </div>

          <div className=" md:w-auto select-none mb-6 md:mb-0 relative md:absolute flex items-center justify-center  right-0 top-0 translate-y-[0%] md:top-[50%] md:translate-y-[-50%]">
            <Image
              className="w-full select-none"
              priority
              src={bubble}
              alt="Bubble"
            />
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] bottom-4 flex flex-col items-center ">
            <ScrollIcon />
          </div>
        </div>
      </div>
      {/* <------- end of hero/landing page  -------> */}
      {/* <------- about me page -------> */}
      <Container id="about-me">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] w-full ">
          <motion.div
            variants={PROJECT_EVEN_VARIANT}
            initial="default"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[35%] md:mr-20 min-w-[200px] flex items-center md:mb-0 mb-8 relative"
          >
            <Image className="w-full select-none" src={me} alt="Me" />
          </motion.div>
          <motion.div
            variants={PROJECT_ODD_VARIANT}
            initial="default"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-1 flex-col justify-center md:items-start items-center"
          >
            <h5 className="text-main-color font-bold tracking-widest mb-8">
              <ContentIndicator>02.</ContentIndicator> ABOUT ME
            </h5>
            <p className="text-text-main mb-8 md:mb-4">
              Hi There! My name is Arzl James Lao, and I&#39;m a software
              developer. I&#39;ve always had a passion for technology and a
              drive to create innovative solutions to complex problems. I
              specialize in Web Development, and I&#39;m always eager to expand
              my skill set and take on new challenges.
            </p>
            <Link
              href={CV_LINK}
              target="_blank"
              onMouseEnter={() => setArrowIcon("Down")}
              onMouseLeave={() => setArrowIcon("Right")}
              id="download-btn"
              className="border-main-color justify-center md:w-auto w-full border-[1px] text-main-color text-sm font-medium py-2 px-3 rounded-lg flex items-center"
            >
              Download CV{" "}
              {arrowIcon === "Right" ? (
                <TbArrowNarrowRight size={16} className="ml-2" />
              ) : (
                <TbArrowBarToDown size={16} className="ml-2" />
              )}
            </Link>
          </motion.div>
        </div>
      </Container>
      {/* <------- end of about me page  -------> */}
      {/*<------- experience page ------->*/}
      <Container id="experience">
        <div className="w-full flex items-center justify-center md:justify-start">
          <h5 className="text-main-color font-bold tracking-widest mb-8">
            <ContentIndicator>03.</ContentIndicator> EXPERIENCE
          </h5>
        </div>
        <ul className="bg-slate-100 md:h-14 h-12 flex justify-between w-full rounded-xl p-1 mb-4">
          {_.map(EXP_TABS, (item: { id: number; name: string }) => {
            return (
              <li
                onClick={() => setActiveTab(item.name)}
                className={`w-[33%] h-full rounded-xl transition  flex items-center justify-center cursor-pointer text-sm font-semibold text-text-sub ${
                  item.name === activeTab
                    ? "bg-gradient-to-r from-[#6F74F1] to-[#9B75EE] text-white hover:text-white shadow-sm"
                    : "hover:bg-[#6f73f11a] hover:text-main-color"
                } `}
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <ExperienceCard activeTab={activeTab} />
      </Container>
      {/*<------- end of experience page ------->*/}
      {/*<------- portfolio page ------->*/}
      <Container id="portfolio">
        <div className="flex flex-col items-center justify-center h-auto">
          <div className="relative w-full flex flex-col items-center justify-center">
            <h5 className="text-main-color font-bold tracking-widest bg-white z-10 px-8">
              <ContentIndicator>04.</ContentIndicator> PORTFOLIO
            </h5>
            <div className="absolute top-[50%] translate-y-[-50%] border-b-gray-300 border h-[1px] w-full"></div>
          </div>
          <p className="text-text-sub text-sm mb-14">
            Showcasing some of my personal projects
          </p>
          <AnimatePresence>
            <ProjectList />
          </AnimatePresence>
        </div>
      </Container>
      {/*<------- end of portfolio page ------->*/}
      {/*<------- contact page ------->*/}
      <article
        id="contact"
        className="w-full py-10 min-h-[50vh] bg-[#F4F5F7] flex items-center justify-center"
      >
        <div className="w-full md:w-[75%] md:px-20 px-3 h-full ">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h5 className="text-main-color font-bold tracking-widest mb-2">
              <ContentIndicator>05.</ContentIndicator> CONTACT
            </h5>
            <p className="font-bold text-text-main text-2xl mb-10">
              Let&#39;s keep in touch
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            {_.map(CONTACT_DATA, (data) => {
              return (
                <div
                  key={data.id}
                  className="flex items-center w-full mb-5 md:mb-0"
                >
                  <div className="p-2 rounded-2xl mr-2 ">
                    <data.icon className="text-main-color text-2xl md:text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-text-main font-semibold text-sm">
                      {data.label}
                    </h3>
                    <p className="text-text-sub text-sm">{data.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
      {/*<------- end of contact page ------->*/}
      <Footer />
    </main>
  );
};

export default Home;
