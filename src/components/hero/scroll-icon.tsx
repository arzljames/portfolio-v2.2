import { ReactElement } from "react";

const ScrollIcon = (): ReactElement => {
  return (
    <>
      <svg
        width="20"
        height="30"
        viewBox="0 0 22 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="20"
          height="35"
          rx="10"
          stroke="#808080"
          strokeWidth="2"
        />
        <rect
          id="scroll-dot"
          x="8"
          y="6"
          width="6"
          height="8"
          rx="3"
          fill="#808080"
        />
      </svg>

      <p className="text-text-sub text-xs tracking-[4px] mt-2">SCROLL</p>
    </>
  );
};

export default ScrollIcon;
