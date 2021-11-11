import { gql } from '@apollo/client';
import Service, { IService } from './Service';

interface Props {
  heading: string;
  services: IService[];
}

export default function Services({ heading, services }: Props) {
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
