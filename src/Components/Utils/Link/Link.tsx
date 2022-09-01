import "./Link.scss";
import { Link as RouterLink, NavLink } from "react-router-dom";

interface LinkProps {
	href: string;
	target?: string;
	children: React.ReactNode;
}

const Link = (props: LinkProps) => {
	return (
		<div className="link">
			<NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to={props.href} target={props.target ? props.target : ""}>
				{props.children}
			</NavLink>
		</div>
	);
};

export default Link;
