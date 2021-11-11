import { gql } from '@apollo/client';
import Image from 'next/image';
import { image } from '@/graphql/fragments';

interface Props {
  heading: string;
  subheading: string;
  excerpt: string;
  image: {
    public_id: string;
  };
}

export default function TextWithIllustration({
  heading,
  subheading,
  excerpt,
  image,
}: Props) {
  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <p>{excerpt}</p>
      </div>
      <Image src={image.public_id} alt="foobar" />
    </section>
  );
}

TextWithIllustration.fragment = gql`
  fragment TextWithIllustration on TextWithIllustration {
    _key
    heading
    subheading
    excerpt
    image {
      ...image
    }
  }
  ${image}
`;
