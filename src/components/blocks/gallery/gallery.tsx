import { gql } from '@apollo/client';
import Image from 'next/image';
import { image } from 'utils/graphql/fragments';

export default function Gallery({ name, images }) {
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
