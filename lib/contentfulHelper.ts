import { gql, GraphQLClient } from "graphql-request";

export const getProjects = async () => {
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
            buildLog {
                json
            }
          }
        }
      }
    `;

    return graphQLClient.request(query);
  };