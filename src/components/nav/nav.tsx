interface Link {
  _key: string;
  text: string;
  url: string;
}

export type INav = Array<Link>;

interface Props {
  nav: INav;
}

export default function Nav({ nav }: Props) {
  return (
    <nav className="cluster">
      {nav.map((link) => (
        <a href={`/${link.url}`} key={link._key}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}
