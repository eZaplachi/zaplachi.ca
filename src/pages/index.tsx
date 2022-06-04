import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domAnimation, useAnimation } from "framer-motion";
import { FcGraduationCap, FcBusinessman } from "react-icons/fc";
import { useEffect } from "react";
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
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  const itemLeft = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: -100 },
  };

  const itemRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.4 });
  const animation1 = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animation1.start("visible");
    }
    if (!inView1) {
      animation1.start("hidden");
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start("visible");
    }
    if (!inView2) {
      animation2.start("hidden");
    }
  }, [inView2, animation2]);

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
          <div className={styles.container} ref={ref1}>
            <LazyMotion features={domAnimation}>
              <m.div
                className={styles.icons}
                id={styles.eduIcon}
                variants={itemLeft}
                animate={animation1}
              >
                <FcGraduationCap />
              </m.div>

              <m.div
                className={styles.eduContent}
                animate={animation1}
                variants={list}
              >
                <m.h3 variants={list}>Education</m.h3>
                <m.ul variants={list}>
                  <m.li className={styles.list} variants={itemRight}>
                    2.5 years Electrical engineering at the University of
                    Alberta
                  </m.li>
                  <m.li className={styles.list} variants={itemRight}>
                    Currently transferring into Web development at NAIT
                  </m.li>
                  <m.li className={styles.list} variants={itemRight}>
                    Glass 5 GDL Drivers License
                  </m.li>
                </m.ul>
              </m.div>
            </LazyMotion>
          </div>

          <div className={styles.container}>
            <LazyMotion features={domAnimation}>
              <m.div
                className={styles.icons}
                id={styles.interestIcon}
                variants={itemRight}
                animate={animation2}
              >
                <FcBusinessman />
              </m.div>
              <m.div className={styles.interestContent} animate={animation2}>
                <m.h3 variants={list}>Interests</m.h3>
                <m.ul variants={list}>
                  <m.li className={styles.list} variants={itemLeft}>
                    Soccer
                  </m.li>
                  <m.li className={styles.list} variants={itemLeft}>
                    Reading
                  </m.li>
                  <m.li className={styles.list} variants={itemLeft}>
                    Computer Gaming
                  </m.li>
                </m.ul>
              </m.div>
            </LazyMotion>
          </div>
          <div id={styles.aside2}></div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
