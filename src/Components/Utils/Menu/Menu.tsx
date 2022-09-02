import { createRef, useContext, useRef, useState } from "react";
import { faList, faGear, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import "./Menu.scss";

//Images
import signWhatLogo from "../../../assets/img/sign-what.png";
import signWhatOverLogo from "../../../assets/img/sign-what-over.png";

//Components
import MenuItem from "../MenuItem/MenuItem";
import { AuthContext, AuthContextData } from "../../../Context/auth";

const Menu = (props: any) => {
	const context = useContext(AuthContext);
	const [classList, setClassList] = useState(['menu-container ', 'shrink'])

	const logout = () => {
		const { signOut } = context as AuthContextData;
		signOut();
	};

	const openMenu = () => {
		setTimeout(() => {
			setClassList(['menu-container '])
		}, 200);
	};

	const closeMenu = () => {
		setTimeout(() => {
			setClassList(['menu-container ', 'shrink'])
		}, 250);
	};

	return (
		<div className={classList.join().replaceAll(',', '')} onMouseOver={openMenu} onMouseLeave={closeMenu}>
			<div className="logo item">
				<img className="logo-line" src={signWhatLogo} alt="Sign What Logo" title="Sign What?" />
				<img className="logo-over" src={signWhatOverLogo} alt="Sign What Logo" title="Sign What?" />
			</div>

			<div className="menu-items item">
				<MenuItem icon={faList} title="Assinaturas" imgUrl="signature-icon" link="/dashboard" />
				<MenuItem icon={faGear} title="Configurações" imgUrl="configure-icon" link="/configure" />
				<MenuItem icon={faUser} title="Meus Dados" imgUrl="profile-icon" link="/profile" />
			</div>

			<div className="menu-items-end item">
				<MenuItem icon={faRightFromBracket} title="Sair" action={logout} />
			</div>
		</div>
	);
};

export default Menu;
