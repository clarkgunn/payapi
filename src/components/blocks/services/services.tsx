import { gql } from '@apollo/client';
import Service from './service';

export default function Services({ heading, services }) {
  return (
    <section className="services">
      <hr />
      <h2>{heading}</h2>
      <ul className="service-list">
        {services.map((service) => (
          <Service key={service._key} {...service} />
        ))}
      </ul>
    </section>
  );
}

Services.fragment = gql`
  fragment Services on Services {
    _key
    heading
    services {
      ...Service
    }
  }
  ${Service.fragment}
`;
