import React, { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}
const layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

// header , footer 만들어서 레이아웃에 넣고 레이아웃만 돌아다니면서 사용
