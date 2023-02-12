import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Uiux({ showUiux, animatedBckgrndClr }) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [nextItem, setNextItem] = useState("#design2");
  const [currentItem, setCurrentItem] = useState("#design1");
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
      setNextItem("#design2");
      setCurrentItem("#design1");
      setPrevItem("");
    }
    if (scrollPos === secondItemPos) {
      setNextItem("#design3");
      setCurrentItem("#design2");
      setPrevItem("#design1");
    }
    if (scrollPos === thirdItemPos) {
      setNextItem("");
      setCurrentItem("#design3");
      setPrevItem("#design2");
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
        showUiux === -1
          ? "uiux hide-items"
          : showUiux === 0
          ? "uiux"
          : showUiux === 1 && "uiux animate-items"
      }
      id="uiux"
    >
      {/* <div className="test-container">
        <p className="paragraph white">{`${scrollPos}`}</p>
        <p className="paragraph white">{`${firstItemPos}`}</p>
        <p className="paragraph white">{`${secondItemPos}`}</p>
        <p className="paragraph white">{`${thirdItemPos}`}</p>
        <p className="paragraph white">{`${nextItem}`}</p>
        <p className="paragraph white">{`${prevItem}`}</p>
      </div> */}
      <h2 className="h2 white">UI&UX DESIGN</h2>
      <div className="uiux-quote">
        <h3 className="h3 white">manners matter</h3>
        <h3 className="h3 white">good looks are a bonus</h3>
        <h3 className="h3 white">humor is a must</h3>
      </div>
      <div className="project-slider">
        <div className="project-header">
          <h4 className="h4 white">DESIGNS</h4>
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
          <div
            ref={firstPrjRef}
            id={"design1"}
            className="project-slider-image"
          >
            <Image
              src="/images/design-project-1.png"
              alt="project"
              height={940}
              width={1880}
            ></Image>
          </div>
          <div
            ref={secondPrjRef}
            id={"design2"}
            className="project-slider-image"
          >
            <Image
              src="/images/design-project-2.png"
              alt="project"
              height={940}
              width={1880}
            ></Image>
          </div>
          <div
            ref={thirdPrjRef}
            id={"design3"}
            className="project-slider-image"
          >
            <Image
              src="/images/design-project-not-added-yet.png"
              alt="project"
              height={940}
              width={1880}
            ></Image>
          </div>
        </div>
        <div className="slider-dash-container">
          <div
            className={
              currentItem == "#design1" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#design1" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#design1" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#design1" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
          <div
            className={
              currentItem == "#design2" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#design2" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#design2" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#design2" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
          <div
            className={
              currentItem == "#design3" && animatedBckgrndClr === "blue"
                ? "slider-dash current-dash animated-blue"
                : currentItem == "#design3" && animatedBckgrndClr === "red"
                ? "slider-dash current-dash animated-red"
                : currentItem == "#design3" && animatedBckgrndClr === "green"
                ? "slider-dash current-dash animated-green"
                : currentItem !== "#design3" && "slider-dash white-25-dash"
            }
          >
            {""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uiux;
