import React from "react";
import Image from "next/image";

function Aboutme({ showAboutme }) {
  return (
    <div className="about-me" id="aboutMe">
      <div className="about-me-imageContainer">
        <Image
          src="/images/pexels-malcolm-garret-12926051.jpg"
          alt="about me"
          height={1500}
          width={1500}
          loading="lazy"
        ></Image>
      </div>
      <div
        className={
          showAboutme === -1
            ? "about-me-textContainer hide-items"
            : showAboutme === 0
            ? "about-me-textContainer"
            : showAboutme === 1 && "about-me-textContainer animate-items"
        }
      >
        <h2 className="h2 white">ABOUT ME</h2>
        <h5 className="h5 white">
          IT ALL <span className="linear-red">START</span>ED IN JANUARY 2019,
          WHEN I THOUGHT WEB DEVELOPMENT WAS A PART-TIME JOB AT THE KNIGHT{"'"}s
          WATCH, THE DEVELOPER EDITION ... AND IT TURNED OUT TO BE PRETTY GOOD
          EVEN AT THE BEGINNING
        </h5>
        <h5 className="h5 white">
          DURING QUARANTINE I STARTED <span className="linear-red">LEARN</span>
          ING SOME PROGRAMMING LANGUAGES SUCH AS JAVA AND PYTHON THAT I NEVER
          USED, AND JAVASCRIPT WHICH WAS FASCINATING
        </h5>
        <h5 className="h5 white">
          JAVASCRIPT GAVE ME ACCESS TO REACT, WHICH MADE{" "}
          <span className="linear-red">WORK</span>ING WITH WEBSITES EASIER AND
          MORE FUN. ALSO, NEW TECHNOLOGIES ARE APPEARING{" "}
          <span className="linear-blue">CONTINUOUSLY</span>, AND WHO KNOWS WHAT
          I{"'"}LL LEARN NEXT?
        </h5>
      </div>
    </div>
  );
}

export default Aboutme;
