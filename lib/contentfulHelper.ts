import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CDA_TOKEN}`,
  },
});

export const getProjects = async () => {
  const query = gql`
    {
      projectsCollection {
        items {
          name
          description
          thumbnail {
            title
            url
          }
        }
      }
    }
  `;

  return graphQLClient.request(query);
};

export const getProject = async (name?: string | string[]) => {
  const query = gql`
  query getProject($name: String!) {
    projectsCollection(where: {name: $name}) {
      items {
        name
        buildLog {
          json
        }
        githubLink
        footerText
      }
    }
  }`;

  return graphQLClient.request(query, {name} );
};
