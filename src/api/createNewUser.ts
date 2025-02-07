import { getAuthHeaders } from "../utils/auth";

type UserData = {
    firstName: string,
    lastName: string,
    email: string
}

export default async function createNewUser({ firstName, lastName, email }: UserData){

    const url = `${import.meta.env.VITE_SITOO_API_URL}/users.json`;

    const users = [
        {
            namefirst: firstName,
            namelast: lastName,
            email: email
        }
    ]

    const config = {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(users)
    };

    const response = await fetch(url, config);
    const data = await response.json();
    
    // API returns a response where response.ok is always OK
    // "data" is an array containing one object where "statuscode" must be checked wether it failed och succeeded

    const returnedData = data?.length > 0 ? data[0] : null;

    if (returnedData?.statuscode == 200) {
        return returnedData;
    } else {
        return {
            success: false,
            status: returnedData?.statuscode,
            error: returnedData?.errortext
        }
    }
};