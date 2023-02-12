import React, { useState, useEffect, useRef, useContext } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Aboutme from "../components/Aboutme";
import Uiux from "../components/Uiux";
import Webdev from "../components/Webdev";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { statusContext } from "./_app";
import Navbar from "@/components/Navbar";

function Home() {
  //router
  const router = useRouter();
  //context
  const { itemsStatus, setItemsStatus, scrollPos, setScrollPos } =
    useContext(statusContext);
  //state
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState();
  const [currentPos, setCurrentPos] = useState(0);
  const [bannerPos, setBannerPos] = useState();
  const [aboutmePos, setAboutmePos] = useState();
  const [uiuxPos, setUiuxPos] = useState();
  const [webdevPos, setWebdevPos] = useState();
  const [contactmePos, setContactmePos] = useState();
  const [footerPos, setFooterPos] = useState();
  const [showBanner, setShowBanner] = useState(-1);
  const [showAboutme, setShowAboutme] = useState(-1);
  const [showUiux, setShowUiux] = useState(-1);
  const [showWebdev, setShowWebdev] = useState(-1);
  const [showContactme, setShowContactme] = useState(-1);
  const [popupStatus, setPopupStatus] = useState(0);
  const [animatedBckgrndClr, setAnimatedBckgrndClr] = useState("blue");
  // refrences
  const bannerRef = useRef(null);
  const aboutmeRef = useRef(null);
  const uiuxRef = useRef(null);
  const webdevRef = useRef(null);
  const contactmeRef = useRef(null);
  const footerRef = useRef(null);
  // useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef && bannerRef.current) {
        setBannerPos(bannerRef.current.offsetTop);
      }
      if (aboutmeRef && aboutmeRef.current) {
        setAboutmePos(aboutmeRef.current.offsetTop);
      }
      if (uiuxRef && uiuxRef.current) {
        setUiuxPos(uiuxRef.current.offsetTop);
      }
      if (webdevRef && webdevRef.current) {
        setWebdevPos(webdevRef.current.offsetTop);
      }
      if (contactmeRef && contactmeRef.current) {
        setContactmePos(contactmeRef.current.offsetTop);
      }
      if (footerRef && footerRef.current) {
        setFooterPos(footerRef.current.offsetTop - window.innerHeight);
      }
      setScrollY(window.scrollY);
      setScrollPos(window.scrollY);
      setPageHeight(window.innerHeight);
      setCurrentPos(window.scrollY + window.innerHeight - 128);
    };
    handleScroll();
    if (router && router.pathname != "/") {
      setItemsStatus("solid");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const colors = ["blue", "red", "green"];
      const filteredColors = colors.filter((color) => {
        return color !== animatedBckgrndClr;
      });
      setAnimatedBckgrndClr(
        filteredColors[Math.floor(Math.random() * filteredColors.length)]
      );
    }, 120000);
    return () => clearInterval(animationInterval);
  }, [animatedBckgrndClr]);

  useEffect(() => {
    if (itemsStatus === "solid") {
      setShowBanner(0);
      setShowAboutme(0);
      setShowUiux(0);
      setShowWebdev(0);
      setShowContactme(0);
    } else if (itemsStatus === "animate") {
      if (currentPos > bannerPos) {
        setShowBanner(1);
      }
      if (currentPos > aboutmePos) {
        setShowAboutme(1);
      }
      if (currentPos > uiuxPos) {
        setShowUiux(1);
      }
      if (currentPos > webdevPos) {
        setShowWebdev(1);
      }
      if (currentPos > contactmePos) {
        setShowContactme(1);
      }
    }

    if (scrollY >= footerPos && popupStatus !== -1) {
      if (popupStatus === 0) {
        setPopupStatus(1);
      }
      const popupInterval = setInterval(() => {
        setPopupStatus(-1);
        return () => clearInterval(popupInterval);
      }, 6000);
    }
  }, [currentPos]);

  return (
    <>
      <Head>
        <title>IHAB NOUIDJEM</title>
        <meta name="description" content="ihab nouidjem portfolio website" />
      </Head>
      <main className="main" id="main" onScroll={() => handlePageScroll()}>
        {popupStatus === 1 && (
          <div className="popup">
            <p className="paragraph white">
              all information about website will be in the about section, click
              button down below
            </p>
          </div>
        )}
        <Navbar />
        <div ref={bannerRef}>
          <Banner
            animatedBckgrndClr={animatedBckgrndClr}
            showBanner={showBanner}
          />
        </div>
        <div ref={aboutmeRef}>
          <Aboutme showAboutme={showAboutme} />
        </div>
        <div ref={uiuxRef}>
          <Uiux animatedBckgrndClr={animatedBckgrndClr} showUiux={showUiux} />
        </div>
        <div ref={webdevRef}>
          <Webdev
            animatedBckgrndClr={animatedBckgrndClr}
            showWebdev={showWebdev}
          />
        </div>
        <div ref={contactmeRef}>
          <Contactme showContactme={showContactme} />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
