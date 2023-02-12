import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import {
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsArrowUpRight,
  BsChevronBarUp,
} from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <p className="paragraph white-75">Copyright</p>
        <i className="copyright white-75">
          <MdOutlineCopyright />
        </i>
        <p className="paragraph white-75">2023 ihab nouidjem</p>
      </div>
      <div className="footer-social">
        <a href="https://github.com/ihabnouidjem">
          <i className="icon white-75">
            <BsGithub />
          </i>
        </a>
        <a href="https://www.instagram.com/ihab_ndj/">
          <i className="icon white-75">
            <BsInstagram />
          </i>
        </a>
        <a href="https://twitter.com/NouidjemIhab">
          <i className="icon white-75">
            <BsTwitter />
          </i>
        </a>
      </div>
      <div className="footer-buttons">
        <a href="#main">
          <button className="footer-button">
            <h6 className="h6 white-75">scroll up</h6>
            <i className="icon white-75">
              <BiArrowToTop />
            </i>
          </button>
        </a>
        <Link href="/about" target={"_blank"}>
          {" "}
          <button className="footer-button">
            <h6 className="h6 white-75">about</h6>
            <i className="icon white-75">
              <FiArrowUpRight />
            </i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
