import "./Content.scss";

type ContentProps = {
	children: any;
	style?: any;
};

const defaultProps = {
	style: {
		background: "var(--color-light)",
		width: "1024px",
		height: "720px"
	}
};

const Content = (props: ContentProps) => {
	props = { ...defaultProps, ...props };

	return (
		<div className="content" style={props.style}>
			{props.children}
		</div>
	);
};

export default Content;
