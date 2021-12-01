import { gql } from '@apollo/client';
import Link from 'next/link';
import Nav, { INav } from '@/components/Nav';
import Logo from '@/components/Logo';
import Socials from '@/components/Socials';

interface Props {
  nav: INav;
}

export function Footer({ nav }: Props) {
  return (
    <footer className="stack">
      <section className="center">
        <Link href="/">
          <a className="logo-link" aria-label="Pay API logo">
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
          _id
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
