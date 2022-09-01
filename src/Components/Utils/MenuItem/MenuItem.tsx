import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MenuItem.scss";

//Components
import Link from "../Link/Link";

type MenuItem = {
	icon: any;
	title: string;
	imgUrl?: string;
	isSelected?: boolean;
	link?: string;
	action?: any;
};

const btn = (props: MenuItem) => {
	const [image, setImage] = useState("");

	const getImage = async () => {
		if (!props.imgUrl) return;
		try {
			const image = await import(`../../../assets/img/${props.imgUrl}.png`);
			if (image) {
				setImage(image.default);
			}
		} catch (err) {}
	};

	useEffect(() => {
		getImage();
	}, [props.imgUrl]);

	return (
		<div className="menu-item" onClick={props.action}>
			<div className="selected-bar"></div>
			<div className="icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className="title">{props.title}</div>
			<div className="img">
				<img src={image} alt="" />
			</div>
		</div>
	);
};

export default (props: MenuItem) => {
	return <div className="menu-item-container">{!props.link ? btn(props) : <Link href={props.link}> {btn(props)} </Link>}</div>;
};
