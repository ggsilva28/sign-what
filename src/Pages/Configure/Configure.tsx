import "./Configure.scss";

import Menu from "../../Components/Utils/Menu/Menu";

const Configure = (props: any) => {
	return (
		<div className="flex items-start justify-center h-screen bg-default">
			<h1>Configure</h1>
			<Menu />
		</div>
	);
};

export default Configure;
