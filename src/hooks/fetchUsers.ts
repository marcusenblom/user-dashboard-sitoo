import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../api/fetchUsers";

type FetchUsersParams = {
    start?: number;
    num?: number;
};

export function useFetchUsers({ start, num }: FetchUsersParams) {
	return useQuery({
		queryKey: ["users"],
		queryFn: () => fetchUsers({ start, num }),
	});
}