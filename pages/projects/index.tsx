import { GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/projects/Projects.module.css"

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CDA_TOKEN}`,
    },
  });

  const query = gql`
    {
      projectsCollection {
        items {
          name
          description
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);

  // console.log(data)

  return {
    props: { myProjects: data.projectsCollection.items },
  };
};

const Projects = ({ myProjects }: any) => {
  console.log(myProjects)
  return (
    <div>
      <Layout footerText="wow" stickyOffset={0}>
        <div className={styles.container}>
          <div id={styles.aside1} />
          <div className={styles.cardContainer}>
            {myProjects.map((myProject: any) => (
              <Card
                key={myProject.name}
                title={myProject.name}
                cardLink="website"
                content={myProject.description}
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

{
  /* <div id={styles.card1}>
            <Card
              title='This website'
              cardLink='website'
              content=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card2}>
            <Card
              title='fake project'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card3}>
            <Card
              title='another fake project'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card4}>
            <Card
              title='yet another'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card5}>
            <Card
              title='title'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card6}>
            <Card
              title='title'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div> */
}
