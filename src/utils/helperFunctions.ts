// Helper function to extract query params
export function getQueryParam(param: string, defaultValue: string): number {
	return parseInt(new URLSearchParams(window?.location?.search).get(param) || defaultValue);
}

// Scroll to target html element
export function scrollToTargetElement(id: string){
    if(document){
        let element = document.getElementById(id);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
}

// Function that returns an array with date as a string + year
export function getFormattedDateAndYear(dateInput: number | Date){
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return ["(unavailable)", "-"];

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
    }) + " " + new Date(date).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).toLowerCase();

    const year = date.getFullYear().toString();

    return [formattedDate, year];
}
