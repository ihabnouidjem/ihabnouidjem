import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Webdev({ showWebdev, animatedBckgrndClr }) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [nextItem, setNextItem] = useState("#project2");
  const [currentItem, setCurrentItem] = useState("#project1");
  const [prevItem, setPrevItem] = useState("");
  const [firstItemPos, setFirstItemPos] = useState(0);
  const [secondItemPos, setSecondItemPos] = useState();
  const [thirdItemPos, setThirdItemPos] = useState();

  const sliderRef = useRef(null);
  const firstPrjRef = useRef(null);
  const secondPrjRef = useRef(null);
  const thirdPrjRef = useRef(null);

  const scrollHandler = () => {
    if (sliderRef && sliderRef.current) {
      setScrollPos(sliderRef.current.scrollLeft);
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (secondPrjRef.current) {
      setSecondItemPos(sliderRef.current.offsetWidth + 16);
    }
    if (secondPrjRef.current) {
      setThirdItemPos((sliderRef.current.offsetWidth + 16) * 2);
    }
  }, []);
  useEffect(() => {
    if (secondPrjRef.current) {
      setSecondItemPos(sliderRef.current.offsetWidth + 16);
    }
    if (secondPrjRef.current) {
      setThirdItemPos((sliderRef.current.offsetWidth + 16) * 2);
    }
    if (scrollPos === firstItemPos) {
      setNextItem("#project2");
      setCurrentItem("#project1");
      setPrevItem("");
    }
    if (scrollPos === secondItemPos) {
      setNextItem("#project3");
      setCurrentItem("#project2");
      setPrevItem("#project1");
    }
    if (scrollPos === thirdItemPos) {
      setNextItem("");
      setCurrentItem("#project3");
      setPrevItem("#project2");
    }
  }, [scrollPos]);
  useEffect(() => {
    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  const scrollToLeft = () => {
    if (scrollPos === secondItemPos) {
      firstPrjRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    if (scrollPos === thirdItemPos) {
      secondPrjRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const scrollToRight = () => {
    if (scrollPos === firstItemPos) {
      secondPrjRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    if (scrollPos === secondItemPos) {
      thirdPrjRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  return (
    <div
      className={
        showWebdev === -1
          ? "uiux hide-items"
          : showWebdev === 0
          ? "uiux"
          : showWebdev === 1 && "uiux animate-items"
      }
      id="webDev"
    >
      {windowWidth > 1000 ? (
        <h2 className="h2 linear-grey">WEB DEVELOPEMENT</h2>
      ) : (
        <h2 className="h2 linear-grey">WEB DEV</h2>
      )}
      <div className="uiux-quote">
        <h3 className="h3 white-50">{"do what you love"}</h3>
        <h3 className="h3 white-50">{"love what you do"}</h3>
      </div>
      <div className="project-slider">
        <div className="project-header">
          <h4 className="h4 white">PROJECTS</h4>
          <div className="scroll-buttons">
            {!(prevItem == "") ? (
              <i className="icon white" onClick={() => scrollToLeft()}>
                <FiChevronLeft />
              </i>
            ) : (
              <i className="icon white-25">
                <FiChevronLeft />
              </i>
            )}
            {!(nextItem == "") ? (
              <i className="icon white" onClick={() => scrollToRight()}>
                <FiChevronRight />
              </i>
            ) : (
              <i className="icon white-25">
                <FiChevronRight />
              </i>
            )}
          </div>
        </div>
        <div className="slider-x" ref={sliderRef} onScroll={scrollHandler}>
          <a href="https://cube-17bb1.web.app">
            <div
              ref={firstPrjRef}
              id={"project1"}
              className="project-slider-image"
            >
              <Image
                srcset="/images/phone-dev-project-1.png 600w,
              /images/dev-project-1.png 1880w"
                sizes="(max-width: 600px) 600px,
              1880px"
                src="/images/dev-project-1.png"
                alt="project"
                height={940}
                width={1880}
              ></Image>
            </div>
          </a>
          <a href="https://github.com/ihabnouidjem">
            <div
              ref={secondPrjRef}
              id={"project2"}
              className="project-slider-image"
            >
              <Image
                srcset="/images/phone-dev-project-not-added-yet.png 600w,
              /images/dev-project-not-added-yet.png 1880w"
                sizes="(max-width: 600px) 600px,
              1880px"
                src="/images/dev-project-not-added-yet.png"
                alt="project"
                height={940}
                width={1880}
              ></Image>
            </div>
          </a>
          <a href="https://github.com/ihabnouidjem">
            <div
              ref={thirdPrjRef}
              id={"project3"}
              className="project-slider-image"
            >
              <Image
                srcset="/images/phone-dev-project-not-added-yet.png 600w,
              /images/dev-project-not-added-yet.png 1880w"
                sizes="(max-width: 600px) 600px,
              1880px"
                src="/images/dev-project-not-added-yet.png"
                alt="project"
                height={940}
                width={1880}
              ></Image>
            </div>
          </a>
        </div>
        <div className="slider-dash-container">
          <div
            className={
              currentItem == "#project1" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#project1" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#project1" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#project1" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
          <div
            className={
              currentItem == "#project2" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#project2" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#project2" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#project2" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
          <div
            className={
              currentItem == "#project3" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#project3" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#project3" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#project3" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webdev;
