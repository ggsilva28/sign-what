import "./Dashboard.scss";

import Menu from "../../Components/Utils/Menu/Menu";

const Dashboard = (props: any) => {
	return (
		<div className="flex items-start justify-center h-screen bg-default">
			<h1>Dashboard</h1>
			<Menu />
		</div>
	);
};

export default Dashboard;
