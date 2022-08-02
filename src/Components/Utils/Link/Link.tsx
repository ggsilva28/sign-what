import './Link.scss';

interface LinkProps {
    href: string;
    target?: string;
    children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  return (
    <a className="link" href={props.href} target={props.target ? props.target : ''}>
        {props.children}
    </a>
  );
}

export default Link;