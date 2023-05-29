import React, { ReactElement } from "react";
import Image from "next/image";
import logo from "../../app/favicon.ico";
import _ from "lodash";
import { SOCIAL_LINKS } from "@/conts";
import Link from "next/link";

const Footer = (): ReactElement => {
  const dateYear: Date = new Date();
  return (
    <footer className="w-full min-h-[128px] h-32 bg-[#2c3036] flex items-center justify-center">
      <div className="w-full md:w-[75%] h-full  md:px-20 px-3">
        <div className="flex justify-center items-center border-[#4e5053]  border-b-[1px] h-[60%]">
          <div className="w-5 mr-2">
            <Image className="w-full select-none" src={logo} alt="Logo" />
          </div>
          <h5 className="text-[#d7d7e2] font-bold text-lg">Arzl James Lao</h5>
        </div>
        <div className="w-full h-[40%] flex items-center justify-between">
          <p className="text-[#a4aab3] text-sm">
            © {dateYear.getFullYear()} All rights reserved
          </p>
          <ul className="flex text-[#8c90f7] items-center">
            {/* <li className="transition p-1 mr-2 rounded-full cursor-pointer hover:bg-main-color hover:text-white">
              <BsFacebook />
            </li>
            <li className="transition p-1 mr-2 rounded-full cursor-pointer hover:bg-main-color hover:text-white">
              <RxLinkedinLogo />
            </li>
            <li className="transition p-1 rounded-full cursor-pointer hover:bg-main-color hover:text-white">
              <AiOutlineGithub size={18} />
            </li> */}
            {_.map(SOCIAL_LINKS, (link) => {
              return (
                <li
                  key={link.id}
                  className="transition p-1 mr-2 rounded-full cursor-pointer hover:bg-main-color hover:text-white"
                >
                  <Link href={link.link} target="_blank">
                    <link.icon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
