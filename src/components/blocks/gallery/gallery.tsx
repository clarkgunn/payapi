import { gql } from '@apollo/client';
import Image from 'next/image';
import { image } from '@/graphql/fragments';

interface Props {
  name: string;
  images: [
    {
      public_id: string;
      height?: number;
      width?: number;
      _key: string;
    },
  ];
}

export default function Gallery({ name, images }: Props) {
  return (
    <section className="gallery">
      {images.map((image) => (
        <Image
          src={image.public_id}
          alt="foobar"
          height={image?.height}
          width={image?.width}
          key={image._key}
        />
      ))}
    </section>
  );
}

Gallery.fragment = gql`
  fragment Gallery on Gallery {
    _key
    name
    images {
      ...image
    }
  }
  ${image}
`;
