import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async () => {
  try {
    const query = gql`
      query Pages {
        pages {
          title
          slug
          content {
            html
          }
        }
      }
    `
    const { pages } = await client.request(query)

    return {
      status: 200,
      body: { pages },
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: 'There was a server error.' },
    }
  }
}
