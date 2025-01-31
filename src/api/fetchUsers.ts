import { getAuthHeaders } from "../utils/auth";

type FilterType = {
    start?: number,
    num?: number,
}

export default async function fetchUsers({ start = 0, num = 10}: FilterType = {}){
    const query = `?start=${start}&num=${num}`;
    const url = `${import.meta.env.VITE_SITOO_API_URL}/users.json${query}`;

	console.log("Fetching users...");
    console.log(query);

    const config = {
        method: "GET",
        headers: getAuthHeaders()
    };

    const response = await fetch(url, config);
  
    if (!response.ok) {
      	throw new Error("Failed to fetch users");
    }
  
    return response.json();
};