import "./Profile.scss";

import Menu from "../../Components/Utils/Menu/Menu";

const Profile = (props: any) => {
	return (
		<div className="flex items-start justify-center h-screen bg-default">
			<h1>Profile</h1>
			<Menu />
		</div>
	);
};

export default Profile;
