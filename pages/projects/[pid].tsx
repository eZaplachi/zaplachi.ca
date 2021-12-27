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

  return {
    props: { myProject: data.projectsCollection.items[0] },
  };
};


const Website = ({ myProject }: any) => {

  // console.log(myProjects);

  return (
    <div>
      <Layout footerText={myProject.footerText} stickyOffset={0}>
        <div>
          <p className={styles.header}>{myProject.name}</p>
          <p>Code for this project:</p>
          <a href={myProject.githubLink}>{myProject.githubLink}</a>
          <div className={styles.main}>hello there</div>
        </div>
      </Layout>
    </div>
  );
};

export default Website;
