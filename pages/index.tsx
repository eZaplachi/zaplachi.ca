import type { NextPage } from "next";
import { FaFutbol, FaUniversity } from "react-icons/fa";
import Image from "next/image";
import Name from "../components/Name";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";
import heroBkg from "../public/heroBG.jpg";

const Home: NextPage = () => {
  return (
    <main>
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
        <Layout
          footerText="Feel free to send a message!"
          stickyOffset={1}
          header="Home Page"
          description="Click to learn more about me"
          keywords="react nextjs portfolio"
        >
          <div className={styles.wrapper} style={{ marginTop: "15vh" }}>
            <div id={styles.aside1}></div>
            <div className={styles.eduIcon}>
              <FaUniversity />
            </div>
            <div className={styles.eduContent}>
              <h3>Education</h3>
              <ul>
                <li className={styles.list}>
                  2.5 years Electrical engineering at the University of Alberta
                </li>
                <li className={styles.list}>
                  Currently transferring into Web development at NAIT
                </li>
                <li className={styles.list}>Glass 5 GDL Drivers License</li>
              </ul>
            </div>
            <div className={styles.interestIcon}>
              <FaFutbol />
            </div>
            <div className={styles.interestContent}>
              <h3>Interests</h3>
              <ul>
                <li className={styles.list}>Soccer</li>
                <li className={styles.list}>Reading</li>
                <li className={styles.list}>Computer Gaming</li>
              </ul>
            </div>
            <div style={{ paddingBottom: "100vh" }} />
            <div id={styles.aside2}></div>
          </div>
        </Layout>
      </div>
    </main>
  );
};

export default Home;
