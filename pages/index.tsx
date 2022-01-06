import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Name from "../components/Name";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";
import heroBkg from "../public/heroBG.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Evan&apos;s Website</title>
        <meta charSet="UTF-8" />
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
          />
          <Name />
        </header>
        <Layout footerText="cool Footer" stickyOffset={1} header="Home Page">
          <div className={styles.wrapper} style={{ marginTop: "15vh" }}>
            <div id={styles.aside1}></div>
            <div className={styles.authorImg}>
              <Image src={heroBkg} alt="photo of author" />
            </div>
            <div className={styles.content}>
              <h3>Header</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptate magni reiciendis porro at illo aspernatur
                accusamus autem cum ab quisquam esse provident necessitatibus,
                ut, adipisci explicabo, possimus recusandae repudiandae.
              </p>
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
