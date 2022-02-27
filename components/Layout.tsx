import { ReactChild, useState } from "react";
import Head from "next/head";
import useScroll from "../hooks/useScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.css";

const Layout = (props: {
  children: ReactChild;
  footerText: string;
  stickyOffset: number;
  header: string;
  description: string;
  keywords: string;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useScroll((offset: number) => {
    if (offset > window.innerHeight * props.stickyOffset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  let headTitle = `- ${props.header}`

  return (
    <section lang="en">
      <Head>
        <title>&nbsp;Evan&apos;s Portfolio {headTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Evan Zaplachinski" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar} id={scrolled ? styles.scrolled : ""}>
        <Navbar />
      </div>
      {/* Hidden header for screen reader purposes */}
      <h1 id={styles.hiddenHeader}>{props.header}</h1>
      <div className={styles.wrapper} id={scrolled ? styles.scrolledSpace : ""}>
        <div className={styles.content}>{props.children}</div>
      </div>
      <footer id={styles.footerSpace}>
        <Footer text={props.footerText} />
      </footer>
    </section>
  );
};

export default Layout;
