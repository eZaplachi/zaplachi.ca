import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
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
  let backLink = "/projects";
  let codeLink = myProject.githubLink ? myProject.githubLink : "#";
  let codeLinkText = myProject.githubLink ? "Github Link" : "No code required";

  const dateLength = 10;
  const trimmedDate = myProject.lastUpdated.substring(0, dateLength);
  // console.log(myProjects);
//TODO: maybe find a way to not require any
  return (
    <div>
      <Layout footerText={myProject.footerText} stickyOffset={0} header={myProject.name}>
        <div className={styles.wrapper}>
          <div id={styles.aside1}>
            <Link href={backLink}>
              <a className={styles.iconContainer}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </a>
            </Link>
          </div>
          <div className={styles.content}>
            <p className={styles.header}>{myProject.name}</p>
            <p>
              Code for this project:&nbsp;
              <a className={styles.link} href={codeLink}>
                {codeLinkText}
              </a>
            </p>
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
            <div className={styles.main}>hello there</div>
          </div>
          <div id={styles.aside2}>
            <p id={styles.lastUpdated}>Last Updated: {trimmedDate}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Website;
