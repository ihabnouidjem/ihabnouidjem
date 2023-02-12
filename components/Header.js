import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

function Header({
  header,
  setItemsStatus,
  navbarStatus,
  setNavbarStatus,
  scrollPos,
}) {
  return (
    <div
      className={
        header == "black" && scrollPos <= 16
          ? "header black-header"
          : header == "black" && scrollPos > 16
          ? "header black-header white-border-bottom"
          : header == "white" && scrollPos <= 16
          ? "header white-header"
          : header == "white" &&
            scrollPos > 16 &&
            "header white-header black-border-bottom"
      }
    >
      <Link href="/">
        <h5
          className={
            header == "black" ? "h5 white" : header == "white" && "h5 black"
          }
        >
          IHAB NOUIDJEM
        </h5>
      </Link>
      {header == "black" && (
        <div>
          <ul className="header-nav show-nav">
            <a
              href="#aboutMe"
              onClick={() => {
                setItemsStatus("solid");
              }}
            >
              <li className="h6 white-75">.about me</li>
            </a>
            <a
              href="#uiux"
              onClick={() => {
                setItemsStatus("solid");
              }}
            >
              <li className="h6 white-75">.ui&ux design</li>
            </a>
            <a
              href="#webDev"
              onClick={() => {
                setItemsStatus("solid");
              }}
            >
              <li className="h6 white-75">.web developement</li>
            </a>
            <a
              href="#contactMe"
              onClick={() => {
                setItemsStatus("solid");
              }}
            >
              <li className="h6 white-75">.contact me</li>
            </a>
          </ul>
          <i
            className="icon show-icon white-75"
            onClick={() => {
              setNavbarStatus(!navbarStatus);
            }}
          >
            {navbarStatus ? <IoMdClose /> : <IoMenu />}
          </i>
        </div>
      )}
    </div>
  );
}

export default Header;
