import { gql } from '@apollo/client';

export default function CallToAction({ heading, link }) {
  return (
    <section className="cta">
      <h2>{heading}</h2>
      <a href={link.url}>{link.text}</a>
    </section>
  );
}

CallToAction.fragment = gql`
  fragment CallToAction on CallToAction {
    _key
    heading
    link {
      text
      url
    }
  }
`;
