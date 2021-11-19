import type { NextPage } from "next";
import Head from "next/head";
import Name from "../components/Name";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Evan&apos;s Website</title>
        <meta
          name='description'
          content='Evan Zaplachinskis Personal Websiste'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className={styles.appHeader}>
          <Name />
        </header>
        <Layout footerText='cool Footer'>
          <body>
            <div className={styles.wrapper} style={{ marginTop: "15vh" }}>
              <div id={styles.aside1}></div>
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
          </body>
        </Layout>
      </main>
    </div>
  );
};

export default Home;
