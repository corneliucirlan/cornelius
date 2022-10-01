export default async (url, params) => {

	// Build fetch URL
	let fetchURL = new URL(url)
	fetchURL.search = new URLSearchParams(params)

	// Fetch posts
	let response = await fetch(fetchURL.href)

	// Return data as JSON
	return await response.json()
}
