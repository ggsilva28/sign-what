import "./Button.scss";

const Button = (props: any) => {
	return (
		<button data-mdb-ripple="true" data-mdb-ripple-color="light" className="btn" onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
