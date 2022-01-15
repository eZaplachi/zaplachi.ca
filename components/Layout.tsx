import { ReactChild, useState } from "react";
import useScroll from "../hooks/useScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.css";

const Layout = (props: { children: ReactChild; footerText: string, stickyOffset: number, header: string }) => {
  const [scrolled, setScrolled] = useState(false);

  useScroll((offset: number) => {
    if (offset > window.innerHeight * props.stickyOffset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <section>
      <div className={styles.navbar} id={scrolled ? styles.scrolled : ""}>
        <Navbar />
      </div>
      {/* Hidden header for screen reader purposes */}
      <h1 id={styles.hiddenHeader}>{props.header}</h1>
      <div className={styles.wrapper} id={scrolled ? styles.scrolledSpace : ""} >
          <div className={styles.content}>{props.children}</div>
      </div>
      <footer id={styles.footerSpace}>
        <Footer text={props.footerText} />
      </footer>
    </section>
  );
};

export default Layout;
