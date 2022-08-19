import "./Link.scss";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
	href: string;
	target?: string;
	children: React.ReactNode;
}

const Link = (props: LinkProps) => {
	return (
		<div className="link">
			<RouterLink to={props.href} target={props.target ? props.target : ""}>
				{props.children}
			</RouterLink>
		</div>
	);
};

export default Link;
