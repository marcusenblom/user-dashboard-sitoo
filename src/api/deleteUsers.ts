import { getAuthHeaders } from "../utils/auth";

type UserData = {
    id: string,
}

export default async function deleteUser({ id }: UserData){

    const url = `${import.meta.env.VITE_SITOO_API_URL}/users/${id}.json`;

    const config = {
        method: "DELETE",
        headers: getAuthHeaders(),
    };

    const response = await fetch(url, config);
    const data = await response.json();

    // API returns a response where data is true/false if the action was successful or not

    if (data) {
        return {
            success: true
        };
    } else {
        return {
            success: false,
            error: data[0]?.errortext || "The user could not be deleted"
        }
    }
};