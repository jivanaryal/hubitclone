import React, { useEffect, useState } from "react";
import Toolbar from "../../Components/Navigation/Toolbar";
import Sidebar from "../../Components/Navigation/Sidebar";
// import HomePages from "../../Components/Pages/HomePages";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const [size, setSize] = useState(window.innerWidth);

  const cleanup = () => {
    setSize(window.innerWidth);
    if (size <= 990) {
      setShow(false);
    } else if (size > 990) {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", cleanup);
    return () => {
      window.removeEventListener("resize", cleanup);
    };
  });
  return (
    <div>
      {show ? <Toolbar /> : <Sidebar show={show} setShow={setShow} />}
      <div className="mt-28">{children}</div>
    </div>
  );
};

export default Layout;
