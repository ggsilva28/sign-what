import "./Profile.scss";

import Menu from "../../Components/Utils/Menu/Menu";
import Content from "../../Components/Utils/Content/Content";

const Profile = (props: any) => {
	return (
		<div className="flex items-center justify-center h-screen bg-default">
			<Menu />
			<Content>
				<h1>Meus Dados</h1>
			</Content>
		</div>
	);
};

export default Profile;
