import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <div id="container" className="mt-12 p-4">
    {children}
  </div>
);

export default Container;
