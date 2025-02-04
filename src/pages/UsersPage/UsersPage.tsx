import styles from './UsersPage.module.scss';
import { useFetchUsers } from "../../hooks/fetchUsers";
import { User } from '../../types/user';
import { useNavigate } from "react-router-dom";
import { getQueryParam } from '../../utils/helperFunctions';
import { useEffect, useState } from "react";
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';

export default function UsersPage(){
	const navigate = useNavigate();

	// Use a helper function to extract query params
	const page = getQueryParam("page", "1");
	const perPage = getQueryParam("per_page", "10");

	// Calculate the 'start' index for pagination
	const start = (page - 1) * perPage;

	// Fetch users with pagination
	const { data: usersData, isLoading, error, refetch } = useFetchUsers({ start, num: perPage });
	// const [loading, setLoading] = useState(isLoading);

	// Trigger refetch whenever the 'page' query parameter changes
	useEffect(() => {
		refetch();
	}, [page, refetch]);

	function changePage(forward: boolean){
		const nextPage = forward ? page + 1 : page - 1;

		// Ensure that the page number is not less than 1
		if (nextPage < 1) return;

		// Create a new URLSearchParams object to preserve existing query parameters
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("page", nextPage.toString());

		// Update the URL with the modified query params (only the page will change)
		navigate({
			search: queryParams.toString(),
		});
	}

	return (
		<PageWrapper>
			<div className={styles.wrapper}>
				{isLoading ? "Loading..."
				:
				error ? "ERROR LOADING USERS"
				:
				usersData?.items?.length > 0 ?
				<ul>
					{usersData?.items?.map((user: User, index: number) => {
						return(
							<li key={index}>{user?.namefirst} {user?.namelast}</li>
						)
					})}
				</ul>
				:
				"No users found"
				}

				<button onClick={()=>{changePage(false)}}>Previous</button>
				<button onClick={()=>{changePage(true)}}>Next</button>
			</div>
		</PageWrapper>
	);
	
};