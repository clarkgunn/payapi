import { gql } from '@apollo/client';

interface Props {
  heading: string;
  link: {
    url: string;
    text: string;
  };
}

export default function CallToAction({ heading, link }: Props) {
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
