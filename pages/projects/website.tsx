import Layout from "../../components/Layout";
import styles from "../../styles/projects/website.module.css";

const Website = () => {
  return (
    <main>
      <Layout footerText='my intro to webdev'>
        <body className={styles.main}></body>
      </Layout>
    </main>
  );
};

export default Website;
