interface Props {
  href: string;
  children: JSX.Element | string;
}

export default function Link({ href, children, ...rest }: Props) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
