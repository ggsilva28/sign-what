import "./Configure.scss";

import Menu from "../../Components/Utils/Menu/Menu";
import Content from "../../Components/Utils/Content/Content";

const Configure = (props: any) => {
	return (
		<div className="flex items-center justify-center h-screen bg-default configure-content">
			<Menu />
			<Content>
				<h1>Configurações</h1>
			</Content>
		</div>
	);
};

export default Configure;
