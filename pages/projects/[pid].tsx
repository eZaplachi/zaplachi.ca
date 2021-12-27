import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import { getProjects, getProject } from "../../lib/contentfulHelper";
import styles from "../../styles/pages/projects/[pid].module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProjects();

  return {
    paths: data.projectsCollection.items.map((myProject: any) => ({
      params: { pid: `${myProject.name}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getProject(context.params?.pid);
  // returns relevant data in the first value of the items array

  return {
    props: { myProject: data.projectsCollection.items[0] },
  };
};

const Website = ({ myProject }: any) => {
  // console.log(myProjects);

  return (
    <div>
      <Layout footerText={myProject.footerText} stickyOffset={0}>
        <div className={styles.container}>
          <div id={styles.aside1}></div>
          <div className={styles.content}>
            <p className={styles.header}>{myProject.name}</p>
            <p>Code for this project:</p>
            <a className={styles.link} href={myProject.githubLink}>
              {myProject.githubLink}
            </a>
            <div className={styles.main}>hello there</div>
            <div id={styles.aside1}></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Website;
