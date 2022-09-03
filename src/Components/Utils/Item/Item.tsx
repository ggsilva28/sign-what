import "./Item.scss";

type ItemProps = {
	children: any;
	type?: string;
	className?: string;
};

const defaultProps = {
	type: "row-space-between"
};

const Item = (props: ItemProps) => {
	props = { ...defaultProps, ...props };

	return <div className={`item-container ${props.type} ${props.className}`}>{props.children}</div>;
};

export default Item;
