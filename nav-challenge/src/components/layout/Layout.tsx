import { FC, ReactNode } from "react";

import "toastr/build/toastr.css";

import "./Layout.scss";

interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children = null }) => {
  return (
    <div className="main-wrapper">
      <main className="child-wrapper">{children}</main>
    </div>
  );
};

export default Layout;
