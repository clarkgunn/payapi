import { gql } from '@apollo/client';
import Testimonial from './testimonial';

export default function Testimonials({ heading, testimonials }) {
  return (
    <section className="testimonials">
      <h2>{heading}</h2>
      <div className="switcher">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._key} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

Testimonials.fragment = gql`
  fragment Testimonials on Testimonials {
    _key
    heading
    testimonials {
      ...Testimonial
    }
  }
  ${Testimonial.fragment}
`;
