import { Component, ReactNode } from "react";
import { AuthContext, AuthContextData } from "../../Context/auth";

import './Dashboard.scss';

class Dashboard extends Component {
	constructor(props: any) {
		super(props);

        this.logout = this.logout.bind(this)
	}

	logout() {
		const { signOut } = this.context as AuthContextData;
		signOut();
	}

	render(): ReactNode {
		return (
			<div className="flex items-start justify-center h-screen bg-default">
				<h1>Dashboard</h1>
				<button onClick={this.logout}> Logout </button>
			</div>
		);
	}
}

Dashboard.contextType = AuthContext;

export default Dashboard;
