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

  // Todo: make navbar sticky and add theme switcher logic
  return (
    <div>
      <Link href='/'>
        <a className={styles.navbarCon}>Home</a>
      </Link>
      <Link href='/projects'>
        <a className={styles.navbarCon}>Projects</a>
      </Link>
      <Link href='/contact'>
        <a className={styles.navbarCon}>Contact</a>
      </Link>
      <a
        onClick={expanded}
        className={
          expand ? styles.themeBtn + " " + styles.rotate : styles.themeBtn
        }>
        <FontAwesomeIcon icon={faSun} id='icon' />
      </a>
      <div ref={ref} className={styles.themeChg}>
        <a className={styles.theme} id={styles.firstTheme}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className={styles.theme}>
          <FontAwesomeIcon icon={faCampground} />
        </a>
        <a className={styles.theme}>
          <FontAwesomeIcon icon={faMeteor} />
        </a>
      </div>
      <div className={styles.navbarIcon}>
        <Image
          src={logo}
          alt='Logo'
          placeholder='blur'
          className={styles.iconSizing}
          height={75}
          width={75}
          id='reload'></Image>
      </div>
    </div>
  );
};

export default Navbar;
