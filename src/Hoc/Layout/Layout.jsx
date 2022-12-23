import React from "react";
import Toolbar from "../../Components/Navigation/Toolbar";
// import HomePages from "../../Components/Pages/HomePages";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div className="mt-28">{children}</div>
    </div>
  );
};

export default Layout;
