import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Theme/variables.scss";
import "./Theme/App.scss";

import Login from "./Pages/Login/Login";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Configure from "./Pages/Configure/Configure";

import { AuthProvider, RequiredAuth } from "./Context/auth";

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/create-account" element={<CreateAccount />}></Route>
				{/* Path dashboard with RequiredAuth */}
				<Route
					path="/dashboard"
					element={
						<RequiredAuth>
							<Dashboard />
						</RequiredAuth>
					}
				/>

				<Route
					path="/profile"
					element={
						<RequiredAuth>
							<Profile />
						</RequiredAuth>
					}
				/>

				<Route
					path="/configure"
					element={
						<RequiredAuth>
							<Configure />
						</RequiredAuth>
					}
				/>
			</Routes>
			<ToastContainer />
		</AuthProvider>
	);
}

export { App };
