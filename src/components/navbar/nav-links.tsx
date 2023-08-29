import React, { ReactElement, useState, useEffect } from "react";
import { NAV_LINKS } from "@/conts";
import _ from "lodash";

type INavLinks = {
  id: number;
  name: string;
  link: string;
  keys: number[];
};

type IScrollPosition = {
  scrollPosition: number;
};

const Navlinks = ({ scrollPosition }: IScrollPosition): ReactElement => {
  const [index, setIndex] = useState<number>(0);

  useEffect(
    () => setIndex(Math.ceil(scrollPosition / window.innerHeight)),
    [scrollPosition]
  );
  return (
    <ul className="md:flex hidden items-center text-white">
      {_.map(NAV_LINKS, (item: INavLinks, key: number) => {
        return (
          <li
            key={item.id}
            className=" ml-4 text-[13px] font-semibold cursor-pointer"
          >
            <a
              className={`p-2  hover:bg-slate-100 hover:text-main-color rounded-md ease-in-out transition-all ${
                _.includes(item.keys, index)
                  ? "text-main-color bg-slate-100"
                  : "text-text-sub bg-transparent"
              } `}
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
