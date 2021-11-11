/* eslint-disable @next/next/no-img-element */
import { gql } from '@apollo/client';

export default function Service({ heading, subheading, icon }) {
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
