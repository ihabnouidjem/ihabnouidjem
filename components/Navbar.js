import { statusContext } from "@/pages/_app";
import React, { useContext } from "react";

function Navbar() {
  const { setItemsStatus, navbarStatus, setNavbarBtnStatus } =
    useContext(statusContext);
  return (
    <div className={navbarStatus ? "navbar show-navbar" : "navbar hide-navbar"}>
      <a
        href="#aboutMe"
        onClick={() => {
          setItemsStatus("solid");
          setNavbarBtnStatus(true);
        }}
      >
        <li className="h6 white-75">.about me</li>
      </a>
      <a
        href="#uiux"
        onClick={() => {
          setItemsStatus("solid");
          setNavbarBtnStatus(true);
        }}
      >
        <li className="h6 white-75">.ui&ux design</li>
      </a>
      <a
        href="#webDev"
        onClick={() => {
          setItemsStatus("solid");
          setNavbarBtnStatus(true);
        }}
      >
        <li className="h6 white-75">.web developement</li>
      </a>
      <a
        href="#contactMe"
        onClick={() => {
          setItemsStatus("solid");
          setNavbarBtnStatus(true);
        }}
      >
        <li className="h6 white-75">.contact me</li>
      </a>
    </div>
  );
}

export default Navbar;
