import { FaHome, FaMeteor, FaCampground } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
// import logo from "/logo192.png";  --> import vs static serve to next/image ????
import useScroll from "./useScroll";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  Theme,
  ThemeDefault,
  ThemeCamping,
  ThemeSaturn,
} from "../../lib/themeTypes";
import useTheme from "./useTheme";
import styles from "../../styles/components/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  let highlight = {
    home: "transparent",
    projects: "transparent",
    contact: "transparent",
  };

  // TODO: Cleanup highlights
  // CSS :active doesn't play nice with Next/link -- workaround that maintains Next/link's optimizations
  useEffect(() => {
    const currentPath = router.pathname!;
    // console.log(currentPath);

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

  // Janky workaround to keep color changer visible at small screen widths
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

  const [theme, setTheme] = useLocalStorage("theme", ThemeDefault);

  const setDefault = () => {
    setTheme(ThemeDefault);
  };

  const setCamping = () => {
    setTheme(ThemeCamping);
  };

  const setSaturn = () => {
    setTheme(ThemeSaturn);
  };

  useTheme(theme);

  return (
    <section className={styles.wrapper}>
      <a href="#skip" className={styles.skipToContent}>
        Skip to content
      </a>
      <Link
        href="/"
        className={styles.navbarCon}
        id="home"
        style={{ backgroundColor: `${highlight.home}` }}>
        
          Home
        
      </Link>
      <Link href="/projects" className={styles.navbarCon} id="projects">
        
          Projects
        
      </Link>
      <Link href="/contact" className={styles.navbarCon} id="contact">
        
          Contact
        
      </Link>
      <button
        onClick={expanded}
        tabIndex={0}
        className={
          expand ? styles.themeBtn + " " + styles.rotate : styles.themeBtn
        }
      >
        <IoColorPalette id="icon" />
      </button>
      <div ref={ref} className={styles.themeChg}>
        <button
          tabIndex={0}
          className={styles.theme}
          onClick={setDefault}
          id={styles.firstTheme}
        >
          <FaHome />
        </button>
        <button tabIndex={0} className={styles.theme} onClick={setCamping}>
          <FaCampground />
        </button>
        <button
          tabIndex={0}
          className={styles.theme}
          onClick={setSaturn}
          id={styles.lastTheme}
        >
          <FaMeteor />
        </button>
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
