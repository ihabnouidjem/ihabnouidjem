import "@/styles/globals.css";
import Header from "../components/Header";
import "../styles/header.css";
import "../styles/banner.css";
import "../styles/aboutMe.css";
import "../styles/uiux.css";
import "../styles/contactMe.css";
import "../styles/footer.css";
import "../styles/about.css";
import "../styles/navbar.css";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";

export const statusContext = createContext();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [header, setHeader] = useState("black");
  const [itemsStatus, setItemsStatus] = useState("animate");
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [navbarBtnStatus, setNavbarBtnStatus] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    if (router.pathname == "/") {
      setHeader("black");
    } else if (router.pathname == "/about") {
      setHeader("white");
    }
  }, [router.pathname]);
  useEffect(() => {
    if (navbarBtnStatus) {
      setNavbarStatus(false);
      setNavbarBtnStatus(false);
      return;
    }
    if (navbarStatus) {
      const interval = setInterval(() => {
        setNavbarStatus(false);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [navbarStatus, navbarBtnStatus]);
  return (
    <>
      <Header
        header={header}
        setItemsStatus={setItemsStatus}
        navbarStatus={navbarStatus}
        setNavbarStatus={setNavbarStatus}
        scrollPos={scrollPos}
      />

      <statusContext.Provider
        value={{
          itemsStatus,
          setItemsStatus,
          navbarStatus,
          setNavbarStatus,
          setNavbarBtnStatus,
          scrollPos,
          setScrollPos,
        }}
      >
        {" "}
        <Component {...pageProps} />
      </statusContext.Provider>
    </>
  );
}
