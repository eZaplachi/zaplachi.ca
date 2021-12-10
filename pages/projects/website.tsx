import Layout from "../../components/Layout";
import styles from "../../styles/pages/projects/website.module.css";
import { GraphQLClient, gql } from "graphql-request";

export async function getStaticProps() {
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

  const projects = await graphQLClient.request(query);

  return {
    props: { projects }
  }
}

getStaticProps().catch((error) => console.error(error));

const Website = ({ projects }: any) => {
  console.log(projects)

  return (
    <div>
      <Layout footerText="my intro to webdev" stickyOffset={0}>
        <body className={styles.main}></body>
      </Layout>
    </div>
  );
};

export default Website;
