import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./CreateAccount.scss";

import rightImage from "../../Assets/img/right-style.png";
import signWhatLogo from "../../Assets/img/sign-what.png";

//Components
import Input from "../../Components/Forms/Input/Input";
import Button from "../../Components/Forms/Button/Button";
import FormBox from "../../Components/Utils/FormBox/FormBox";
import Link from "../../Components/Utils/Link/Link";
import { useRequest } from "../../Hooks/useRequest";

type PageState = {
	form: {
		email: string;
		password: string;
		name: string;
	};
	loading: boolean;
};

const CreateAccount = (props: any) => {
	const [state, setState] = useState<PageState>({
		form: {
			email: "",
			password: "",
			name: ""
		},
		loading: false
	});
	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { post } = useRequest();

		setState({ ...state, loading: true });
		const response = await post("/user/create", state.form);
		setState({ ...state, loading: false });

		if (response.isOk) {
			toast.success("Seu usuário foi criado! Seja bem-vindo ao Sign What?", {});
			navigate("/login");
		} else {
			toast.error("Não foi possível criar seu usuário", {});
		}
	};

	const handleChange = (e: any) => {
		setState({ ...state, form: { ...state.form, [e.name]: e.value } });
	};

	return (
		<div className="flex items-center justify-center h-screen bg-default">
			<FormBox sideImage={rightImage}>
				<div className="flex flex-col items-center title">
					<img className="logo" src={signWhatLogo} alt="SignWhat" />
				</div>
				<form className="flex flex-col items-end justify-start" onSubmit={handleSubmit}>
					<h3 className="form-title">Crie sua conta</h3>
					<Input onChange={handleChange} required name="name" label="Nome completo" placeholder="Digite seu nome completo" type="text" />
					<Input onChange={handleChange} required name="email" label="E-mail" placeholder="exemplo@email.com" type="email" />
					<Input onChange={handleChange} required name="password" label="Senha" placeholder="Crie sua senha" type="password" />
					<Button type="submit" loading={state.loading}>
						Criar conta
					</Button>

					<div className="create-account">
						<Link href="/login">
							<span> Já tem uma conta? </span> Faça login
						</Link>
					</div>
				</form>
			</FormBox>
		</div>
	);
};

export default CreateAccount;
