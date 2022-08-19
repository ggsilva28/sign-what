import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Button = (props: any) => {
	return (
		<button data-mdb-ripple="true" data-mdb-ripple-color="light" className="btn" type={props.type || "button"} onClick={props.onClick} disabled={props.disabled || props.loading}>
			{!props.loading ? (
				props.children
			) : (
				<span>
					Enviando <FontAwesomeIcon icon={faCircleNotch} spin />
				</span>
			)}
		</button>
	);
};

export default Button;
