import projectsData from "../components/data/projects"
import { indexCopy } from "../components/data/site-copy"
import Card from "../utils/interface/card"
import { Project, Source } from "../utils/interface/project"
import { getPhotoData } from "../utils/images"

const formatPost = async (
	data: any,
	classes: string[],
	source: string | null
): Promise<Card> => {
	return {
		image: await getPhotoData(
			source === "study" || source === "personal"
				? data.imageURL
				: source === "dribbble"
				? data.images.hidpi
				: data.media_url
		),
		title: source !== "instagram" ? data.title : null,
		caption: source !== "dribbble" ? data.caption : data.description,
		href: source !== "dribbble" ? data.permalink : data.html_url,
		target: data.type === "study" ? "_self" : "_blank",
		classes: classes,
		source: source
	}
}

export default async () => {
	// Initialize projects array
	const projects: Project[] = []

	// Sources for all projects
	const sources: Source[] = [
		{
			url: "",
			params: undefined,
			classes: ["col-12", "col-md-6", "card", "card-dribbble"],
			type: "study"
		},
		{
			url: "",
			params: undefined,
			classes: ["col-12", "col-md-6", "card", "card-dribbble"],
			type: "personal"
		},
		{
			url: "https://api.dribbble.com/v2/user/shots",
			params: {
				access_token: process.env.DRIBBBLE_TOKEN!,
				per_page: "3"
			},
			classes: ["col-12", "col-md-4", "card", "card-dribbble"],
			type: "dribbble"
		},
		{
			url: "https://graph.instagram.com/v14.0/me/media",
			params: {
				access_token: process.env.INSTAGRAM_TOKEN!,
				fields: "id,caption,media_url,permalink",
				limit: "3"
			},
			classes: ["col-12", "col-md-4", "card", "card-instagram"],
			type: "instagram"
		}
	]

	for (const source of sources) {
		// Case Studies and Personal Projects
		if (source.type === "study" || source.type === "personal") {
			const filteredProjects = projectsData.filter(
				project => project.type === source.type
			)
			const posts: Card[] = await Promise.all(
				filteredProjects.map(async (item: any) =>
					formatPost(item, source.classes, source.type)
				)
			)

			projects.push({
				kicker: indexCopy.sections[source.type].kicker,
				heading: indexCopy.sections[source.type].title,
				posts: posts
			})
		}

		// Latest Dribbble and Instagram posts
		if (source.type === "dribbble" || source.type === "instagram") {
			// Build fetch URL
			const fetchURL = new URL(source.url)
			const searchParams = new URLSearchParams(source.params)
			fetchURL.search = searchParams.toString()

			// Fetch data from the URL
			const response = await fetch(fetchURL.href)

			const responseData =
				source.type === "instagram"
					? (await response.json())?.data
					: await response.json()

			const posts: Card[] | false =
				response.status === 200 &&
				(await Promise.all(
					responseData.map(async (item: any) =>
						formatPost(item, source.classes, source.type)
					)
				))

			projects.push({
				kicker: indexCopy.sections[source.type].kicker,
				heading: indexCopy.sections[source.type].title,
				posts: posts
			})
		}
	}

	return projects
}
