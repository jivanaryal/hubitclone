import React, { useState } from "react";
import Toolbar from "../../Components/Navigation/Toolbar";
import Sidebar from "../../Components/Navigation/Sidebar";
// import HomePages from "../../Components/Pages/HomePages";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Toolbar
        show={show}
        setShow={() =>
          setShow((prev) => {
            return !prev;
          })
        }
      />
      <Sidebar
        show={show}
        setShow={() =>
          setShow((prev) => {
            return !prev;
          })
        }
      />

      <div className=" pd:mt-4">{children}</div>
    </div>
  );
};

export default Layout;
