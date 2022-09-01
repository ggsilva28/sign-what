import { useContext } from "react";
import { faList, faGear, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import "./Menu.scss";

//Images
import signWhatLogo from "../../../assets/img/sign-what.png";

//Components
import MenuItem from "../MenuItem/MenuItem";
import { AuthContext, AuthContextData } from "../../../Context/auth";

const Menu = (props: any) => {
	const context = useContext(AuthContext);

	const logout = () => {
		const { signOut } = context as AuthContextData;
		signOut();
	};

	return (
		<div className="menu-container">
			<div className="logo item">
				<img src={signWhatLogo} alt="Sign What Logo" title="Sign What?" />
			</div>

			<div className="menu-items item">
				<MenuItem icon={faList} title="Assinaturas" imgUrl="signature-icon" link="/dashboard" />
				<MenuItem icon={faUser} title="Configurações" imgUrl="configure-icon" link="/configure" />
				<MenuItem icon={faGear} title="Meus Dados" imgUrl="profile-icon" link="/profile" />
			</div>

			<div className="menu-items-end item">
				<MenuItem icon={faRightFromBracket} title="Sair" action={logout} />
			</div>
		</div>
	);
};

export default Menu;
