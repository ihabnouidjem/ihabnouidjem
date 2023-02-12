import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { statusContext } from "./_app";
import Image from "next/image";

function About() {
  const { scrollPos, setScrollPos } = useContext(statusContext);

  useEffect(() => {
    const ScrollY = () => {
      setScrollPos(window.scrollY);
    };
    ScrollY();
    window.addEventListener("scroll", ScrollY);
    return () => removeEventListener("scroll", ScrollY);
  }, []);

  return (
    <main className="main about-main">
      <Head>
        <title>IHAB NOUIDJEM: about</title>
      </Head>
      <div className="about-item">
        <h5 className="h5 black">ABOUT WEBSITE</h5>
        <p className="paragraph black-50">
          This website was designed and developed by ihab nouidjem to showcase
          his work and skills
        </p>
      </div>
      <div className="about-item">
        <h5 className="h5 black">UI&UX DESIGN</h5>
        <p className="paragraph black-50">Designed in figma.</p>
        <div className="about-design-img">
          <Image
            src="/images/design-ihabnouidjem.png"
            alt="project"
            height={1880}
            width={1880}
          ></Image>
        </div>
      </div>
      <div className="about-item">
        <h5 className="h5 black">DEVELOPEMENT</h5>
        <p className="paragraph black-50">
          Tech used in the website: next js . HTML5 . css . mongodb
        </p>
      </div>
      <div className="about-item">
        <h5 className="h5 black">CREDITS</h5>
        <p className="paragraph black-50">
          Color palette : inspired from vercel.com
        </p>
        <p className="paragraph black-50">
          Images : www.pixels.com By : malcolm garret & daniel putzer
        </p>
      </div>
      <div className="about-item">
        <h5 className="h5 black">THANK YOU FOR VISITING</h5>
      </div>
    </main>
  );
}

export default About;
