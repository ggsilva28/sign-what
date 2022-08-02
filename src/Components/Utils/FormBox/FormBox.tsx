import "./FormBox.scss";

interface FormBoxProps {
	sideImage?: string;
	children: React.ReactNode;
}

const FormBox = (props: FormBoxProps) => {
	return (
		<div className="form-box">
			{props.children}
			<div className="side-image">{props.sideImage ? <img className="" src={props.sideImage || ""} alt="" /> : ""}</div>
		</div>
	);
};

export default FormBox;
