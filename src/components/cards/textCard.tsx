import { gql } from "@apollo/client";
import Link from "next/link";

export default function TextCard({ heading, content, link }) {
  return (
    <article className="text-card center">
      <div className="stack">
        <h2>{heading}</h2>
        <p>{content}</p>
        <div>
          <Link href={link.url}>
            <a>{link.text}</a>
          </Link>
        </div>
      </div>
    </article>
  );
}

TextCard.fragment = gql`
  fragment TextCard on TextCard {
    _key
    heading
    content
    link {
      text
      url
    }
  }
`;
