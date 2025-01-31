type AuthHeadersOptions = {
    contentType?: string;
    accept?: string;
};

export function getAuthHeaders({ contentType = "application/json", accept = "application/json" }: AuthHeadersOptions = {}) {
    const username = import.meta.env.VITE_SITOO_USERNAME;
    const password = import.meta.env.VITE_SITOO_PASSWORD;

    if (!username || !password) {
        throw new Error("Missing API credentials in .env.local");
    }

    const credentials = btoa(`${username}:${password}`);

    return {
        "Content-Type": contentType,
        "Accept": accept,
        "Authorization": `Basic ${credentials}`
    };
}