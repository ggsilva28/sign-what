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

	function signIn(token: string, user: User) {
		localStorage.setItem("sign-what:token", token);
		localStorage.setItem("sign-what:user", JSON.stringify(user));
		return navigate("/dashboard");
	}

	function signOut() {
		setUser(null);
		localStorage.removeItem("sign-what:token");
		// return navigate("/login");
	}

	useEffect(() => {
		const { get } = useRequest();
		const token = localStorage.getItem("sign-what:token");

		if (token) {
			get("/auth/token")
				.then((response) => {
					if (response.isOk) {
						// return navigate("/dashboard");
					} else {
						signOut();
					}
				})
				.catch(() => {
					signOut();
				});
		}
	}, []);

	return <AuthContext.Provider value={{ user, signOut, signIn }}>{props.children}</AuthContext.Provider>;
}

export function RequiredAuth(props: any) {
	const [, setUser] = useState<User | null>(null);
	const navigate = useNavigate();
	const storage = localStorage.getItem("sign-what:user") || null;
	let userStorage = null;
	if (storage) {
		userStorage = JSON.parse(storage);
	}

	if (!userStorage) {
		toast.error("É necessário estar logado para acessar essa página");
		// return navigate("/login");
	} else {
		setUser(userStorage);
	}

	return props.children;
}
