import React, { Dispatch, SetStateAction } from "react";
import _ from "lodash";
import { NAV_LINKS } from "@/conts";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

const Drawer = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-[100vw] overflow-hidden h-[100vh] fixed top-0 left-0 z-50 flex flex-col backdrop-blur-sm bg-[#ffffffde] border items-center justify-center">
      <div
        onClick={() => {
          setIsDrawerOpen(false);
        }}
        className="w-10 h-10 hover:bg-[#eaeaec] absolute top-3 right-3 cursor-pointer transition flex items-center justify-center bg-hero  rounded-full text-text-main"
      >
        <RiCloseFill size={20} />
      </div>
      <ul className="w-full h-full ">
        {_.map(NAV_LINKS, (link) => {
          return (
            <li
              onClick={() => setIsDrawerOpen(false)}
              id="mobile-links"
              className=" h-[25%] w-full flex items-center cursor-pointer text-text-main font-semibold text-2xl justify-center"
              key={link.id}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Drawer;
