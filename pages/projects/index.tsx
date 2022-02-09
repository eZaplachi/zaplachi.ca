import { GetStaticProps } from "next";
import { getProjects } from "../../lib/contentfulHelper";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/projects/Projects.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProjects();
  // console.log(data)7

  return {
    props: { myProjects: data.projectsCollection.items },
  };
};

const Projects = ({ myProjects }: any) => {
  // console.log(myProjects);
  return (
    <div>
      <Layout footerText="Feel free to suggest a change or a new project!" stickyOffset={20} header="Projects">
        <div className={styles.container}>
          <div id={styles.aside1} />
          <div className={styles.cardContainer}>
            {myProjects.map((myProject: any) => (
              <Card
                key={myProject.name}
                title={myProject.name}
                cardLink={myProject.name}
                content={myProject.description}
                bkgImgUrl={myProject.thumbnail?.url}
                bkgImgTitle={myProject.thumbnail?.title}
              ></Card>
            ))}
          </div>
          <div id={styles.aside2} />
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
