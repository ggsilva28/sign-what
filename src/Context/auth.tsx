import { createContext, ReactNode, useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRequest } from "../Hooks/useRequest";

type User = {
	id: string;
	name: string;
	email: string;
	avatar_url?: string;
};

export type AuthContextData = {
	user: User | null;
	signIn: (token: string, user: User) => void;
	signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
	children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
	const [user, setUser] = useState<User | null>(null);
	const navigate = useNavigate();

	const signIn = (token: string, user: User) => {
		localStorage.setItem("sign-what:token", token);
		localStorage.setItem("sign-what:user", JSON.stringify(user));
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem("sign-what:token");
		localStorage.removeItem("sign-what:user");
		navigate("/");
	};

	const validateToken = async () => {
		const { get } = useRequest();
		const response = await get("/auth/token");

		if (!response.isOk) {
			signOut();
		}

		return response.isOk;
	};

	useEffect(() => {
		const token = localStorage.getItem("sign-what:token");

		if (token) {
			validateToken()
				.then((e) => {
					return e! ? navigate("/dashboard") : navigate("/login");
				})
				.catch((e) => {
					console.error(e);
				});
		} else {
			return navigate("/login");
		}
	}, [user]);

	return <AuthContext.Provider value={{ user, signOut, signIn }}>{props.children}</AuthContext.Provider>;
}

export function RequiredAuth(props: any) {
	const [user, setUser] = useState<User | null>(null);
	const navigate = useNavigate();
	const storage = localStorage.getItem("sign-what:user") || null;
	let userStorage: User | null = user;

	if (storage) {
		userStorage = JSON.parse(storage);
	}

	if (!userStorage) {
		toast.error("É necessário estar logado para acessar essa página");
		useEffect(() => {
			navigate("/login");
		}, []);
		return false;
	} else {
		useEffect(() => {
			setUser(userStorage);
		}, []);
	}

	return props.children;
}
