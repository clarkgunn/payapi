import { gql } from '@apollo/client';
import Image from 'next/image';
import { image } from 'utils/graphql/fragments';

export default function ImageCard({ name, image }) {
  return (
    <div className={name}>
      <Image
        className={name}
        src={image.public_id}
        alt="foobar"
        height="600"
        width="720"
        layout="responsive"
      />
    </div>
  );
}

ImageCard.fragment = gql`
  fragment ImageCard on ImageCard {
    _key
    name
    image {
      ...image
    }
  }
  ${image}
`;
