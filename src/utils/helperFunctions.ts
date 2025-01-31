// Helper function to extract query params
export function getQueryParam(param: string, defaultValue: string): number {
	return parseInt(new URLSearchParams(window?.location?.search).get(param) || defaultValue);
}