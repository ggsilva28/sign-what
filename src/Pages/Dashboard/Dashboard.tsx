import "./Dashboard.scss";

import Menu from "../../Components/Utils/Menu/Menu";
import Item from "../../Components/Utils/Item/Item";
import Content from "../../Components/Utils/Content/Content";
import Button from "../../Components/Forms/Button/Button";
import { useRequest } from "../../Hooks/useRequest";
import { useState } from "react";
import { useEffect } from "react";

const ContentStyle = {
	background: "transparent",
	width: "1024px",
	marginTop: "25px",
	padding: "30px"
};

const Dashboard = (props: any) => {
	const [data, setData] = useState({
		signatures: [],
		total: 0
	});
	const { get } = useRequest();

	const getSignatures = async () => {
		const response = await get("/signatures/active");
		if (response.isOk) {
			setData({
				...data,
				signatures: response.data
			});
		}
	};

	useEffect(() => {
		getSignatures();
	}, []);

	return (
		<div className="flex items-start justify-center h-screen bg-default">
			<Menu />

			<Content style={ContentStyle}>
				<Item type="row-space-between" className="page-header">
					<h1>Assinaturas Ativas</h1>
					<Button> Nova assinatura </Button>
				</Item>
			</Content>
		</div>
	);
};

export default Dashboard;
