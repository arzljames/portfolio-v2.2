import React, { ReactElement } from "react";
import { NAV_LINKS } from "@/conts";
import _ from "lodash";

type INavLinks = {
  id: number;
  name: string;
  link: string;
};

const Navlinks = (): ReactElement => {
  return (
    <ul className="md:flex hidden items-center text-white">
      {_.map(NAV_LINKS, (item: INavLinks) => {
        return (
          <li
            key={item.id}
            className=" ml-4 text-[13px] font-semibold cursor-pointer"
          >
            <a
              className="p-2 text-text-sub hover:bg-slate-100 hover:text-main-color rounded-md ease-in-out transition "
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
