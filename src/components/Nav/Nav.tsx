interface Link {
  _id: string;
  pageName: string;
  slug: {
    current: string;
  };
}

export type INav = Link[];

interface Props {
  nav: INav;
}

export default function Nav({ nav }: Props) {
  return (
    <nav className="cluster">
      {nav.map((link) => (
        <a href={`/${link.slug.current}`} key={link._id}>
          {link.pageName}
        </a>
      ))}
    </nav>
  );
}
