import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import { SnackbarProvider } from "./context/SnackbarProvider";

const queryClient = new QueryClient();

export default function App() {

	return (
		<>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<SnackbarProvider>
					<AppRoutes />
				</SnackbarProvider>
			</BrowserRouter>
		</QueryClientProvider>
		</>
	)
};