import { useState } from "react";

import './Input.scss';

interface InputProps {
	value?: string;
	label?: string;
	placeholder?: string;
	type?: string;
	required?: boolean;
	readonly?: boolean;
	onChange?: (event: any) => void;
}

const Input = (props: InputProps) => {
	const [value, setValue] = useState("");
	return (
		<div className="input">
			{props.label ? <label>{props.label}</label> : ""}
			<input
				type={props.type ? props.type : "text"}
				value={props.value ? props.value : value}
				placeholder={props.placeholder ? props.placeholder : ""}
				required={props.required ? props.required : false}
				readOnly={props.readonly ? props.readonly : false}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
};

export default Input;
