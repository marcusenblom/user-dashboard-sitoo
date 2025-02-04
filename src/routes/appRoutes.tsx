import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import routes from "./routes";
import DashboardNavigation from "../layouts/DashboardNavigation/DashboardNavigation";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.login.path} element={<LoginPage />} />
			<Route element={<DashboardNavigation />}>
				<Route path={routes.users.path} element={<UsersPage />} />
				<Route path={routes.products.path} element={<p>Products</p>} />
				<Route path={routes.manufacturers.path} element={<p>Manufacturers</p>} />
			</Route>
		</Routes>
	);
}