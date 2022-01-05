import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faHome,
  faMeteor,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/myLogo.png";
import useScroll from "../hooks/useScroll";
import useLocalStorage from "../hooks/useLocalStorage";
import { Theme, ThemeDefault, ThemeCamping } from "../lib/themeTypes";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const expanded = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    let width = document.documentElement.clientWidth!;
    if (ref && ref.current) {
      if (width <= 435) {
        ref.current.style.maxWidth = `${ref.current.scrollWidth}px`;
        ref.current.style.maxHeight = expand ? `min-content` : "0px";
      } else {
        ref.current.style.maxHeight = "min-content";
        ref.current.style.maxWidth = expand
          ? `${ref.current.scrollWidth}px`
          : "0px";
      }
    }
  }, [ref, expand]);

  useScroll((offset: number) => {
    function scrollRotate() {
      let image = document.getElementById("reload")!;
      image.style.transform = "rotate(" + offset / 2 + "deg)";
    }

    if (offset !== null) {
      window.onscroll = function () {
        scrollRotate();
      };
    }
  });

  const [theme, setTheme] = useLocalStorage("theme", "Default");

  useEffect(() => {
    let currentTheme: Theme = ThemeDefault;

    switch (theme) {
      case "Default":
        currentTheme = ThemeDefault;
        break;
      case "Camping":
        currentTheme = ThemeCamping;
        break;
    }

    // Changing css custom properties to colors defined in theme types
    document.documentElement.style.setProperty(
      "--accentClr",
      currentTheme.accentClr
    );
    document.documentElement.style.setProperty(
      "--appHeaderClr",
      currentTheme.appHeaderClr
    );
    document.documentElement.style.setProperty("--bkgClr", currentTheme.bkgClr);
    document.documentElement.style.setProperty(
      "--cardBkgClr",
      currentTheme.cardBkgClr
    );
    document.documentElement.style.setProperty(
      "--contentClr",
      currentTheme.contentClr
    );
    document.documentElement.style.setProperty(
      "--extLinkActiveClr",
      currentTheme.extLinkActiveClr
    );
    document.documentElement.style.setProperty(
      "--extLinkClr",
      currentTheme.extLinkClr
    );
    document.documentElement.style.setProperty(
      "--inputBkgClr",
      currentTheme.inputBkgClr
    );
    document.documentElement.style.setProperty(
      "--inputBorderClr",
      currentTheme.inputBorderClr
    );
    document.documentElement.style.setProperty(
      "--navbarActiveClr",
      currentTheme.navbarActiveClr
    );
    document.documentElement.style.setProperty(
      "--navbarBkgClr",
      currentTheme.navbarBkgClr
    );
    document.documentElement.style.setProperty(
      "--neutralClr",
      currentTheme.neutralClr
    );
    document.documentElement.style.setProperty(
      "--scndHeaderClr",
      currentTheme.scndHeaderClr
    );
    document.documentElement.style.setProperty(
      "--scndHeaderClrDark",
      currentTheme.scndHeaderClrDark
    );
    document.documentElement.style.setProperty(
      "--scndHeaderClrLight",
      currentTheme.scndHeaderClrLight
    );
  }, [theme]);

  const setDefault = () => {
    setTheme("Default");
  };

  const setCamping = () => {
    setTheme("Camping");
  };

  return (
    <section>
      <a href="#skip" className={styles.skipToContent}>
        Skip to content
      </a>
      <Link href="/">
        <a className={styles.navbarCon}>Home</a>
      </Link>
      <Link href="/projects">
        <a className={styles.navbarCon}>Projects</a>
      </Link>
      <Link href="/contact">
        <a className={styles.navbarCon}>Contact</a>
      </Link>
      <a
        onClick={expanded}
        className={
          expand ? styles.themeBtn + " " + styles.rotate : styles.themeBtn
        }
      >
        <FontAwesomeIcon icon={faSun} id="icon" />
      </a>
      <div ref={ref} className={styles.themeChg}>
        <a className={styles.theme} id={styles.firstTheme} onClick={setDefault}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className={styles.theme} onClick={setCamping}>
          <FontAwesomeIcon icon={faCampground} />
        </a>
        <a className={styles.theme}>
          <FontAwesomeIcon icon={faMeteor} />
        </a>
      </div>
      <div className={styles.navbarIcon}>
        <Image
          src={logo}
          alt="Logo"
          placeholder="blur"
          className={styles.iconSizing}
          height={75}
          width={75}
          id="reload"
        ></Image>
      </div>
      <p id="skip" />
    </section>
  );
};

export default Navbar;
