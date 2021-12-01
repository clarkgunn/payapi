import { gql } from '@apollo/client';

const GET_ALL_PATHS = gql`
  query getAllPaths {
    allPage {
      _id
      pageName
      slug {
        current
      }
    }
  }
`;

export default GET_ALL_PATHS;
