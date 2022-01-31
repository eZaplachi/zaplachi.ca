import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Name from "../components/Name";
import Layout from "../components/Layout";
import Tree from "../components/Tree";
import styles from "../styles/pages/Home.module.css";
import heroBkg from "../public/heroBG.jpg";
import gradPA from "../public/Grad.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Evan&apos;s Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Evan Zaplachinski" />
        <meta name="description" content="Evan Zaplachinski Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className={styles.appHeader}>
          <Image
            src={heroBkg}
            layout="fill"
            alt="bkg-img"
            objectFit="cover"
            placeholder="blur"
            priority
          />
          <Name />
        </header>
        <Layout footerText="cool Footer" stickyOffset={1} header="Home Page">
          <div className={styles.wrapper} style={{ marginTop: "15vh" }}>
            <div id={styles.aside1}></div>
            <div className={styles.eduImg}>
              <Image
                src={gradPA}
                alt="education pixel art"
                layout="responsive"
              />
            </div>
            <div className={styles.content}>
              <h3>Education</h3>
              <ul>
                <li className={styles.eduList} >
                  2.5 years Electrical engineering at the University of Alberta
                </li>
                <li className={styles.eduList} >Currently transferring into Web development at NAIT</li>
                <li className={styles.eduList} >Glass 5 GDL Drivers License</li>
              </ul>
              <p></p>
            </div>
            <div className={styles.tree}>
              <Tree />
            </div>
            <div style={{ paddingBottom: "100vh" }} />
            <div id={styles.aside2}></div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
