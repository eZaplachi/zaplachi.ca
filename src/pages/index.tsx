import { m, LazyMotion, domAnimation } from "framer-motion";
import { FcGraduationCap, FcBusinessman } from "react-icons/fc";
import { useRef } from "react";
import Image from "next/image";
import type { NextPage } from "next";

import Name from "../components/Decorative/Name";
import Layout from "../components/Layout/Layout";
import heroBkg from "../../public/heroBG.jpg";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <main>
      <header className={styles.appHeader}>
        <Image
          src={heroBkg}
          layout="fill"
          alt="bkg-img"
          objectFit="cover"
          priority
          placeholder="blur"
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

          <LazyMotion features={domAnimation}>
            <m.div
              className={styles.icons}
              id={styles.eduIcon}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 100, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <FcGraduationCap />
            </m.div>

            <m.div
              className={styles.eduContent}
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ ease: "easeOut" }}
            >
              <m.h3 variants={list}>Education</m.h3>
              <m.ul variants={list}>
                <m.li
                  className={styles.list}
                  variants={item}
                  transition={{ ease: "easeOut" }}
                >
                  2.5 years Electrical engineering at the University of Alberta
                </m.li>
                <m.li
                  className={styles.list}
                  variants={item}
                  transition={{ ease: "easeOut" }}
                >
                  Currently transferring into Web development at NAIT
                </m.li>
                <m.li
                  className={styles.list}
                  variants={item}
                  transition={{ ease: "easeOut" }}
                >
                  Glass 5 GDL Drivers License
                </m.li>
              </m.ul>
            </m.div>
          </LazyMotion>

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
    </main>
  );
};

export default Home;
