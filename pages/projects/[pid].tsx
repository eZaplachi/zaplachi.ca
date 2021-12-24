import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getProjects } from "../../lib/contentfulHelper";
import styles from "../../styles/pages/projects/[pid].module.css";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProjects();

  return {
    props: { myProjects: data.projectsCollection.items },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProjects();

  return {
    paths: data.projectsCollection.items.map((myProject: any) => ({
      params: { pid: `${myProject.name}` },
    })),
    fallback: false,
  };
};

const Website = () => {
  // console.log(myProjects);
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Layout footerText="my intro to webdev" stickyOffset={0}>
        <div>
          <p className={styles.header}>{pid}</p>
          <div className={styles.main}>hello there</div>
        </div>
      </Layout>
    </div>
  );
};

export default Website;
