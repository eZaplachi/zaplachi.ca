import Layout from "../../components/Layout";
import styles from "../../styles/pages/projects/website.module.css";

const Website = () => {
  return (
    <div>
      <Layout footerText="my intro to webdev" stickyOffset={0}>
        <div className={styles.main}>
          hello there
        </div>
      </Layout>
    </div>
  );
};

export default Website;
