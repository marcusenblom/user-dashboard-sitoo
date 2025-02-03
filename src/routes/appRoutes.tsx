import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import routes from "./routes";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.login} element={<LoginPage />} />
			<Route path={routes.users} element={<UsersPage />} />
		</Routes>
	);
}