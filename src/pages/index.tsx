import { FcGraduationCap, FcBusinessman } from "react-icons/fc";
import type { NextPage } from "next";
import Image from "next/image";
import Name from "../components/Decorative/Name";
import Layout from "../components/Layout/Layout";
import heroBkg from "../public/heroBG.jpg";
import styles from "../styles/pages/Home.module.css";

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
          header="Home"
          description="Information and sample projects from Evan Zaplachinski"
          keywords="react nextjs portfolio"
        >
          <div className={styles.wrapper}>
            <div id={styles.aside1}></div>
            <div className={styles.icons} id={styles.eduIcon}>
              <FcGraduationCap />
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
            <div className={styles.icons} id={styles.interestIcon}>
              <FcBusinessman />
            </div>
            <div className={styles.interestContent}>
              <h3>Interests</h3>
              <ul>
                <li className={styles.list}>Soccer</li>
                <li className={styles.list}>Reading</li>
                <li className={styles.list}>Computer Gaming</li>
              </ul>
            </div>
            <div id={styles.aside2}></div>
          </div>
        </Layout>
      </div>
    </main>
  );
};

export default Home;
