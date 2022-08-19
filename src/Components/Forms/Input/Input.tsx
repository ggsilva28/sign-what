import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./Input.scss";

interface InputProps {
	value?: string;
	label?: string;
	name: string;
	placeholder?: string;
	type?: string;
	required?: boolean;
	readonly?: boolean;
	onChange?: (event: any) => void;
}

const Input = (props: InputProps) => {
	const [value, setValue] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleType = function () {
		if (props.type === "password" && showPassword) {
			return "text";
		}

		return props.type;
	};

	return (
		<div className="input flex flex-col items-start justify-center">
			{props.label ? <label>{props.label}</label> : ""}

			<div className="input-container flex flex-row items-center flex-nowrap">
				<input
					type={props.type ? handleType() : "text"}
					value={props.value ? props.value : value}
					placeholder={props.placeholder ? props.placeholder : ""}
					required={props.required ? props.required : false}
					readOnly={props.readonly ? props.readonly : false}
					onChange={(e) => {
						setValue(e.target.value);
						props.onChange ? props.onChange({ value: e.target.value, name: props.name }) : null;
					}}
				/>

				{props.type === "password" ? (
					<div className="input-icon flex items-center justify-center">
						<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} />
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Input;
