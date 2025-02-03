import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import routes from "./routes";
import UsersPage from "./pages/UsersPage/UsersPage";

const queryClient = new QueryClient();

export default function App() {

	return (
		<>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>

				<Routes>
					<Route path={routes.login} element={<LoginPage />} />
					<Route path={routes.users} element={<UsersPage />} />
				</Routes>
				
			</BrowserRouter>
		</QueryClientProvider>
		</>
	)
};