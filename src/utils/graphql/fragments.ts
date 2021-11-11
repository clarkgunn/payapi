import { gql } from '@apollo/client';

export const image = gql`
  fragment image on Img {
    _key
    __typename
    height
    width
    public_id
    url: secure_url
  }
`;
