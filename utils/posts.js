import { getPhotoData } from "./images"

export const getPosts = async (url, params) => {
	// Build fetch URL
	let fetchURL = new URL(url)
	fetchURL.search = new URLSearchParams(params)

	// Fetch posts
	let response = await fetch(fetchURL.href)

	// Return data as JSON
	if (response.status === 200)
		return { status: response.status, data: await response.json() }
	else return { status: response.status }
}

export const setPosts = async (data, classes, source) => {
	return {
		image: await getPhotoData(
			source === null
				? data.imageURL
				: source === "dribbble"
				? data.images.hidpi
				: data.media_url
		),
		title: source !== "instagram" ? data.title : null,
		caption: source !== "dribbble" ? data.caption : data.description,
		permalink: source !== "dribbble" ? data.permalink : data.html_url,
		target: data.type === "study" ? "_self" : "_blank",
		classes: classes,
		source: source
	}
}
