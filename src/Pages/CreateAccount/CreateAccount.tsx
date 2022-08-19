import { Component } from "react";
import { toast } from "react-toastify";

import "./CreateAccount.scss";

import rightImage from "../../Assets/img/right-style.png";
import signWhatLogo from "../../Assets/img/sign-what.png";

//Components
import Input from "../../Components/Forms/Input/Input";
import Button from "../../Components/Forms/Button/Button";
import FormBox from "../../Components/Utils/FormBox/FormBox";
import Link from "../../Components/Utils/Link/Link";
import { useRequest } from "../../Hooks/useRequest";

class CreateAccount extends Component {
	state = {
		form: {
			email: "",
			password: "",
			name: ""
		},
		loading: false
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
		const response = await post("/user/create", this.state.form);
		this.setState({ loading: false });

		if (response.isOk) {
			return toast.success("Seu usuário foi criado! Seja bem-vindo ao Sign What?", {});
		}

		return toast.error('Não foi possível criar seu usuário', {});
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
						<h3 className="form-title">Crie sua conta</h3>
						<Input onChange={this.handleChange} required name="name" label="Nome completo" placeholder="Digite seu nome completo" type="text" />
						<Input onChange={this.handleChange} required name="email" label="E-mail" placeholder="exemplo@email.com" type="email" />
						<Input onChange={this.handleChange} required name="password" label="Senha" placeholder="Crie sua senha" type="password" />
						<Button type="submit" loading={this.state.loading}>Criar conta</Button>

						<div className="create-account">
							<Link href="/login">
								<span> Já tem uma conta? </span> Faça login
							</Link>
						</div>
					</form>
				</FormBox>
			</div>
		);
	}
}

export default CreateAccount;
