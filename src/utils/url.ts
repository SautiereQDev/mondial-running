export function getCleanBreadcrumbs(pathname: string): string[] {
	const pages = pathname.split("/").slice(1);
	let filteredPages = [...pages];
	while (filteredPages.length > 0 && !isNaN(Number(filteredPages[filteredPages.length - 1]))) {
		filteredPages.pop();
	}

	filteredPages = filteredPages.map((page) => page.charAt(0).toUpperCase() + page.slice(1));
	return filteredPages;
}
