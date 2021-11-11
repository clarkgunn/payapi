import './sharedCallToAction.module.css';
import { gql } from '@apollo/client';

export interface SharedCallToActionProps {
  heading: string;
  link: {
    text: string;
    url: string;
  };
}

export function SharedCallToAction({ heading, link }: SharedCallToActionProps) {
  return (
    <section className="cta">
      <h2>{heading}</h2>
      <a href={link.url}>{link.text}</a>
    </section>
  );
}

SharedCallToAction.fragment = gql`
  fragment SharedCallToAction on SharedCallToAction {
    _key
    heading
    link {
      text
      url
    }
  }
`;

export default SharedCallToAction;
