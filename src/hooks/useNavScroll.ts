"use client";
import { Dispatch, SetStateAction, useEffect } from "react";

type ISetScrollPosition = {
  setScrollPosition: Dispatch<SetStateAction<number>>;
  scrollPosition: number;
};

export const useNavScroll = ({
  scrollPosition,
  setScrollPosition,
}: ISetScrollPosition): number => {
  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    return;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
};
