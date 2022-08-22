import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext, AuthContextData } from "../../Context/auth";
import { useNavigate } from "react-router-dom";

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

type PageState = {
	form: {
		email: string;
		password: string;
	};
	loading: boolean;
};

export const Login = (props: any) => {
	const [state, setState] = useState<PageState>({
		form: {
			email: "",
			password: ""
		},
		loading: false
	});
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const messagesList: any = {
		"user.not_found": "Usuário não encontrado",
		"user.invalid_password": "Senha inválida"
	};

	const handleChange = (e: any) => {
		setState({ ...state, form: { ...state.form, [e.name]: e.value } });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { post } = useRequest();

		setState({ ...state, loading: true });
		const response = await post("/auth/login", state.form);
		setState({ ...state, loading: false });

		if (response.isOk) {
			const { signIn } = context as AuthContextData;
			signIn(response.data.token, response.data.user);
			toast.success("Bem vindo!", {});
			navigate("/dashboard");
		} else {
			toast.error(messagesList[response.message], {});
		}
	};

	return (
		<div className="flex items-center justify-center h-screen bg-default">
			<FormBox sideImage={rightImage}>
				<div className="flex flex-col items-center title">
					<img className="logo" src={signWhatLogo} alt="SignWhat" />
				</div>
				<form className="flex flex-col items-end justify-start" onSubmit={handleSubmit}>
					<h3 className="form-title">Fazer Login</h3>
					<Input onChange={handleChange} required name="email" label="E-mail" placeholder="exemplo@email.com" type="text" />
					<Input onChange={handleChange} required name="password" label="Senha" placeholder="Entre sua senha" type="password" />
					<Link href="/forgot-password" target="_blank">
						Esqueceu sua senha?
					</Link>
					<Button type="submit" loading={state.loading}>
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
};

export default Login;
