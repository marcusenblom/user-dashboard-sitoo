import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import routes from "./routes";
import DashboardNavigation from "../layouts/DashboardNavigation/DashboardNavigation";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ManufacturerPage from "../pages/ManufacturersPage/ManufacturersPage";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.login.path} element={<LoginPage />} />
			<Route element={<DashboardNavigation />}>
				<Route path={routes.users.path} element={<UsersPage />} />
				<Route path={routes.products.path} element={<ProductsPage />} />
				<Route path={routes.manufacturers.path} element={<ManufacturerPage />} />
			</Route>
		</Routes>
	);
}