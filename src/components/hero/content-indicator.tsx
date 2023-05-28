import { ReactNode } from "react";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: "700",
});

const ContentIndicator = ({ children }: { children: ReactNode }) => {
  return <span className={`${sourceCodePro.className}`}>{children}</span>;
};

export default ContentIndicator;
