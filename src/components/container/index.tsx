import React, { ReactElement, ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
  id: string;
  styles?: string;
};

const Container = ({
  children,
  id,
  styles,
}: Partial<ChildrenProps>): ReactElement => {
  return (
    <article
      id={id}
      className={`w-full md:px-20 md:w-[75%] px-3 py-20 min-h-[100vh] ${styles}`}
    >
      {children}
    </article>
  );
};

export default Container;
