/* eslint-disable @next/next/no-img-element */
import { gql } from '@apollo/client';

export interface IService {
  heading: string;
  subheading: string;
  icon: {
    asset: {
      url: string;
      alt: string;
    };
  };
  _key: string;
}

export default function Service({ heading, subheading, icon }: IService) {
  return (
    <li>
      <section>
        <img src={icon.asset.url} alt={icon.asset.alt} className="icon" />
        <h3>{heading}</h3>
        <p>{subheading}</p>
      </section>
    </li>
  );
}

Service.fragment = gql`
  fragment Service on Service {
    _key
    heading
    subheading
    # icon {
    #   altText
    #   asset {
    #     url
    #   }
    # }
  }
`;
