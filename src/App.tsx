import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersPage from "./pages/UsersPage/UsersPage";

const queryClient = new QueryClient();

export default function App() {

	return (
		<>
		<QueryClientProvider client={queryClient}>

			<UsersPage />

		</QueryClientProvider>
		</>
	)
};