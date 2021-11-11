import { gql } from '@apollo/client';
import Link from 'next/link';
import Nav from 'components/nav';
import Logo from 'components/logo';
import Socials from 'components/socials';

export interface FooterProps {
  nav: {
    text: string;
    url: string;
  };
}

export function Footer({ nav }) {
  return (
    <footer className="stack">
      <section className="center">
        <Link href="#">
          <a className="logo-link" aria-label="Sunnyside logo">
            <Logo height="30" width="170" dark />
          </a>
        </Link>
        <Nav nav={nav} />
        <Socials />
      </section>
    </footer>
  );
}

export const query = gql`
  query Footer {
    allNavigation(where: { name: { eq: "Footer" } }) {
      ... on Navigation {
        inHero
        nav {
          _key
          pageName
          slug {
            current
          }
        }
      }
    }
  }
`;

Footer.query = query;
