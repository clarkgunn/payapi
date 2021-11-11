/* eslint-disable @next/next/no-img-element */
import { gql } from '@apollo/client';
import { image } from 'utils/graphql/fragments';

export default function Testimonial({ name, position, quote, image }) {
  return (
    <article className="testimonial">
      <div className="top">
        <img src={image?.asset?.url} alt="foobar" />
        <p className="quote">{quote}</p>
      </div>
      <div className="bottom">
        <h3 className="name">{name}</h3>
        <h4 className="position">{position}</h4>
      </div>
    </article>
  );
}

Testimonial.fragment = gql`
  fragment Testimonial on Testimonial {
    _key
    name
    position
    quote
    image {
      ...image
    }
  }
  ${image}
`;
