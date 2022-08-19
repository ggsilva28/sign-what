import { Component } from "react";
import { toast } from "react-toastify";
import { AuthContext, AuthContextData } from "../../Context/auth";

import "./Login.scss";

//Images
import rightImage from "../../Assets/img/right-style.png";
import signWhatLogo from "../../Assets/img/sign-what.png";

//Components
import Input from "../../Components/Forms/Input/Input";
import Button from "../../Components/Forms/Button/Button";
import FormBox from "../../Components/Utils/FormBox/FormBox";
import Link from "../../Components/Utils/Link/Link";
import { useRequest } from "../../Hooks/useRequest";

class Login extends Component {
	
	state = {
		form: {
			email: "",
			password: ""
		},
		loading: false
	};

	messagesList: any = {
		"user.not_found": "Usuário não encontrado",
		"user.invalid_password": "Senha inválida"
	};

	constructor(props: any) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e: any) {
		e.preventDefault();
		const { post } = useRequest();

		this.setState({ loading: true });
		const response = await post("/auth/login", this.state.form);
		this.setState({ loading: false });

		if (response.isOk) {
			const { signIn } = this.context as AuthContextData;
			signIn(response.data.token, response.data.user);
			return toast.success("Bem vindo!", {});
		}

		return toast.error(this.messagesList[response.message], {});
	}

	handleChange(e: any) {
		this.setState({ form: { ...this.state.form, [e.name]: e.value } });
	}

	render() {
		return (
			<div className="flex items-center justify-center h-screen bg-default">
				<FormBox sideImage={rightImage}>
					<div className="flex flex-col items-center title">
						<img className="logo" src={signWhatLogo} alt="SignWhat" />
					</div>
					<form className="flex flex-col items-end justify-start" onSubmit={this.handleSubmit}>
						<h3 className="form-title">Fazer Login</h3>
						<Input onChange={this.handleChange} required name="email" label="E-mail" placeholder="exemplo@email.com" type="text" />
						<Input onChange={this.handleChange} required name="password" label="Senha" placeholder="Entre sua senha" type="password" />
						<Link href="/forgot-password" target="_blank">
							Esqueceu sua senha?
						</Link>
						<Button type="submit" loading={this.state.loading}>
							Entrar
						</Button>

						<div className="create-account">
							<Link href="/create-account">
								<span> Não tem uma conta? </span> Cadastre-se
							</Link>
						</div>
					</form>
				</FormBox>
			</div>
		);
	}
}

Login.contextType = AuthContext;

export default Login;
