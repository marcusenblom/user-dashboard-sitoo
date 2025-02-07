import { getAuthHeaders } from "../utils/auth";

type FilterType = {
    start?: number,
    num?: number,
}

export default async function fetchUsers({ start = 0, num = 10}: FilterType = {}){
    const query = `?start=${start}&num=${num}`;
    const url = `${import.meta.env.VITE_SITOO_API_URL}/users.json${query}`;

    const config = {
        method: "GET",
        headers: getAuthHeaders()
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.errortext || "Failed to fetch users");
        }

        return data;
    } catch (error) {
        return Promise.reject({ success: false, error: (error as Error).message });
    }
};