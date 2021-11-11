import { gql } from '@apollo/client';
import Image from 'next/image';
import { image } from '@/graphql/fragments';

interface Props {
  heading: string;
  content: string;
  image: {
    public_id: string;
  };
}

export default function ImageTextCard({ heading, content, image }: Props) {
  return (
    <Image
      src={image.public_id}
      alt="foobar"
      height="600"
      width="720"
      layout="responsive"
    />
  );
}

ImageTextCard.fragment = gql`
  fragment ImageTextCard on ImageTextCard {
    _key
    heading
    content
    image {
      ...image
    }
  }
  ${image}
`;
