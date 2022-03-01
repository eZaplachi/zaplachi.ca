import { FaLongArrowAltLeft } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getProjects, getProject } from "../../lib/contentfulHelper";
import styles, { richText } from "../../styles/pages/projects/[pid].module.css";

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
  let backLink = "/projects";
  let codeLink = myProject.githubLink ? myProject.githubLink : "#";
  let codeLinkText = myProject.githubLink ? "Github Link" : "No code required";

  const trimmedDate = myProject.lastUpdated.substring(0, 10);
  // console.log(myProjects);
  //TODO: maybe find a way to not require any sources --> null from cms
  return (
    <div>
      <Layout
        footerText={myProject.footerText}
        stickyOffset={20}
        header={myProject.name}
        description={myProject.description}
        keywords={myProject.metaTags}
      >
        <div className={styles.wrapper}>
          <div id={styles.aside1}></div>
          <div id={styles.aside2}></div>
          <div className={styles.content}>
            <Link href={backLink}>
              <a className={styles.iconContainer}>
                <FaLongArrowAltLeft />
              </a>
            </Link>
            <p id={styles.lastUpdated}>Last Updated: {trimmedDate}</p>

            <p className={styles.header}>{myProject.name}</p>
            <p className={styles.codeLink}>
              Code for this project:&nbsp;
              <a className={styles.link} href={codeLink}>
                {codeLinkText}
              </a>
            </p>
            <div className={richText}>
              {documentToReactComponents(myProject.buildLog.json!)}
            </div>
            <div className={styles.scndHeader}>Sources:</div>
            <ul>
              {myProject.sources.map((url: any) => (
                <li key={url} className={styles.sourcesList}>
                  <a href={url} className={styles.link}>
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Website;
