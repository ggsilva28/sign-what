import { Component, ReactNode } from "react";
import { AuthContext, AuthContextData } from "../../Context/auth";

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
			<div>
				<h1>Dashboard</h1>
				<button onClick={this.logout}> Logout </button>
			</div>
		);
	}
}

Dashboard.contextType = AuthContext;

export default Dashboard;
