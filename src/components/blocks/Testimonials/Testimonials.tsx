import { gql } from '@apollo/client';
import Testimonial, { ITestimonial } from './Testimonial';

interface Props {
  heading: string;
  testimonials: ITestimonial[];
}

export default function Testimonials({ heading, testimonials }: Props) {
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
