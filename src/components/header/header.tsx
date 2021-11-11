import styles from './header.module.css';
import { gql } from '@apollo/client';
import Logo from 'components/logo';
import MobileNav from 'components/mobileNav';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'components/nav';

export interface HeaderProps {
  nav: Array<any>;
  inverted: boolean;
}

export function Header({ nav = [], inverted = false }: HeaderProps) {
  return (
    <header
      className={`cluster ${styles.header} ${inverted ? 'inverted' : ''}`}
    >
      <Link href="#">
        <a className="logo-link" aria-label="Sunnyside logo">
          <Logo height="30" width="170" />
        </a>
      </Link>
      <Nav nav={nav} />
      <MobileNav>
        <Nav nav={nav} />
      </MobileNav>
    </header>
  );
}

export const query = gql`
  query Header {
    allNavigation(where: { name: { eq: "Header" } }) {
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

Header.query = query;
