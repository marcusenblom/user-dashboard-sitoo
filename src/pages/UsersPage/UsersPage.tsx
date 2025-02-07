import styles from './UsersPage.module.scss';
import { useFetchUsers } from "../../hooks/fetchUsers";
import { User } from '../../types/user';
import { useNavigate } from "react-router-dom";
import { getQueryParam, scrollToTargetElement } from '../../utils/helperFunctions';
import { useEffect, useState } from "react";
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import Pagination from '../../components/Pagination/Pagination';
import UsersTable from '../../components/UsersTable/UsersTable';

export default function UsersPage(){
	const navigate = useNavigate();
	const [users, setUsers] = useState<User[]>([]);

	// Use a helper function to extract query params
	const page = getQueryParam("page", "1");
	const perPage = getQueryParam("per_page", "10");

	// Calculate the 'start' index for pagination
	const start = (page - 1) * perPage;

	// Hold what pages exist
	const [pages, setPages] = useState<number[]>([]);

	// Fetch users with pagination
	const { data: usersData, isLoading, isFetching, error, refetch } = useFetchUsers({ start, num: perPage });
	// const [loading, setLoading] = useState(isLoading);

	// Trigger refetch whenever the 'page' query parameter changes
	useEffect(() => {
		refetch();
	}, [page, refetch]);

	console.log("isFetching: ", isFetching)

	useEffect(()=>{
		updateUsersArray();
	}, [usersData?.items]);

	function changePage(newPage: number){

		// Ensure that the page number is not less than 1
		if (newPage < 1) return;

		// Create a new URLSearchParams object to preserve existing query parameters
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("page", newPage.toString());

		// Update the URL with the modified query params (only the page will change)
		navigate({
			search: queryParams.toString(),
		});

		scrollToTargetElement("topOfPage");
	}

	function updateUsersArray(){
		setUsers(usersData?.items);
		updateAmountOfPages();
	}

	function updateAmountOfPages(){
		// Create pages after filtering in done
        let totalPages = Math.ceil(usersData?.totalcount / perPage);
        let pageNumbers = [];

        for (let i = 0; i < totalPages; i++) {
            pageNumbers.push(i + 1);
        }

		setPages(pageNumbers);
	}

	return (
		<PageWrapper noSidePadding={true}>
			<div className={styles.usersWrapper}>

				<UsersTable users={users} refetch={refetch}>
					{
						isLoading ? <p>Loading users...</p>
						:
						error ? <p>An error occurred when fetching users</p>
						:
						users?.length < 1 ? "No users found"
						:
						null
					}

				</UsersTable>
									

				<div className={styles.pagination}>
					<Pagination
						currentPage={page}
						pages={pages}
						setPage={changePage}
					/>
				</div>
			</div>
		</PageWrapper>
	);
	
};