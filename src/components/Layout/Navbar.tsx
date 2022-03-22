import { FaSun, FaHome, FaMeteor, FaCampground } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
// import logo from "/logo192.png";  --> import vs static serve to next/image ????
import useScroll from "./useScroll";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  Theme,
  ThemeDefault,
  ThemeCamping,
  ThemeSaturn,
} from "../../lib/themeTypes";
import styles from "../../styles/components/Navbar.module.css";

// TODO: cleanup color switcher code
// TODO: Allow color change on enter
const Navbar = () => {
  const router = useRouter();

  let highlight = {
    home: "transparent",
    projects: "transparent",
    contact: "transparent",
  };

  // CSS :active doesn't play nice with Next/link -- workaround that maintains Next/link's optimizations
  useEffect(() => {
    const currentPath = router.pathname!;
    console.log(currentPath);

    switch (currentPath) {
      case "/":
        highlight.home = "var(--navbarActiveClr)";
        break;
      case "/projects":
        highlight.projects = "var(--navbarActiveClr)";
        break;
      case "/contact":
        highlight.contact = "var(--navbarActiveClr)";
        break;
    }

    document.getElementById("home")!.style.backgroundColor = highlight.home;
    document.getElementById("projects")!.style.backgroundColor =
      highlight.projects;
    document.getElementById("contact")!.style.backgroundColor =
      highlight.contact;
  });

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
      case "Saturn":
        currentTheme = ThemeSaturn;
        break;
    }

    // Changing css custom properties to colors defined in theme types -- easily add more themes
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

  const setSaturn = () => {
    setTheme("Saturn");
  };

  return (
    <section>
      <a href="#skip" className={styles.skipToContent}>
        Skip to content
      </a>
      <Link href="/">
        <a
          className={styles.navbarCon}
          id="home"
          style={{ backgroundColor: `${highlight.home}` }}
        >
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a className={styles.navbarCon} id="projects">
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className={styles.navbarCon} id="contact">
          Contact
        </a>
      </Link>
      <a
        tabIndex={0}
        onClick={expanded}
        className={
          expand ? styles.themeBtn + " " + styles.rotate : styles.themeBtn
        }
      >
        <FaSun id="icon" />
      </a>
      <div ref={ref} className={styles.themeChg}>
        <a
          tabIndex={0}
          className={styles.theme}
          id={styles.firstTheme}
          onClick={setDefault}
        >
          <FaHome />
        </a>
        <a tabIndex={0} className={styles.theme} onClick={setCamping}>
          <FaCampground />
        </a>
        <a tabIndex={0} className={styles.theme} onClick={setSaturn}>
          <FaMeteor />
        </a>
      </div>
      <div className={styles.navbarIcon}>
        <Image
          src="/logo192.png"
          alt="Logo"
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
