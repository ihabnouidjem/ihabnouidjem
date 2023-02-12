import React, { useState, useEffect, useRef, useContext } from "react";
import { BsArrowDown } from "react-icons/bs";
import { statusContext } from "@/pages/_app";

function Banner({ showBanner, animatedBckgrndClr }) {
  const { itemsStatus, setItemsStatus } = useContext(statusContext);
  return (
    <div className="banner">
      <div
        className={
          showBanner === -1
            ? "banner-container hide-items"
            : showBanner === 0
            ? "banner-container"
            : showBanner === 1 && "banner-container animate-banner-items"
        }
      >
        <h5 className="h5 white">{"HI I'M"} </h5>
        <h1
          className={
            animatedBckgrndClr === "blue"
              ? "h1 ihab-nouidjem animated-blue"
              : animatedBckgrndClr === "red"
              ? "h1 ihab-nouidjem animated-red"
              : animatedBckgrndClr === "green" &&
                "h1 ihab-nouidjem animated-green"
          }
        >
          IHAB NOUIDJEM
        </h1>
        <p className="paragraph white-75">
          a telecommunications engeneering student, UI&UX designer, and full
          stack web developer based in Algeria, I love creativity, pizza, and
          art.
        </p>
        <a href="#contactMe">
          <button
            className="button"
            onClick={() => {
              setItemsStatus("solid");
            }}
          >
            <h6 className="h6 black">contact me</h6>
            <i className="icon black">
              <BsArrowDown />
            </i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
