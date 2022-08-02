import { Component } from "react";

import "./Login.scss";

//Images
import rightImage from "../../assets/img/right-style.png";
import signWhatLogo from "../../assets/img/sign-what.png";

//Components
import Input from "../../Components/Forms/Input/Input";
import Button from "../../Components/Forms/Button/Button";
import FormBox from "../../Components/Utils/FormBox/FormBox";
import Link from "../../Components/Utils/Link/Link";

class Login extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="flex items-center justify-center h-screen bg-default">
				<FormBox sideImage={rightImage}>
					<div className="flex flex-col items-center title">
						<img className="logo" src={signWhatLogo} alt="SignWhat" />
					</div>
					<form className="flex flex-col items-end justify-start">
						<h3 className="form-title">Fazer Login</h3>
						<Input label="E-mail" placeholder="exemplo@email.com" type="email" />
						<Input label="Senha" placeholder="Entre sua senha" type="password" />
						<Link href="/forgot-password" target="_blank">
							{" "}
							Esqueceu sua senha?{" "}
						</Link>
						<Button>Entrar</Button>

						<div className="create-account">
							<Link href="">
								{" "}
								<span> Não tem uma conta? </span> Cadastre-se{" "}
							</Link>
						</div>
					</form>
				</FormBox>
			</div>
		);
	}
}

export default Login;
