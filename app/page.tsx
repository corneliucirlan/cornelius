import Header from "../components/header"
import projectsData from "../components/data/projects"
import { indexCopy } from "../components/data/site-copy"
import { getPosts, setPosts } from "../utils/posts"
import Hero from "../components/homepage/hero"
import ListProjects from "../components/homepage/list-projects"
import LetsWorkTogether from "../components/work-together"
import indexStyles from "../sass/modules/index.module.sass"

import Card from "../utils/interface/card"

interface FetchParams {
	access_token?: string
	per_page?: number
	fields?: string
	limit?: number
	[key: string]: string | number | undefined
}

interface Project {
	kicker: string
	heading: string
	posts: Card[] | false
}

const preparePosts = async (
	url: string,
	params: FetchParams | null,
	classes: Array<string>,
	source: string | null
): Promise<{
	status: number
	message?: string
	data: Card[] | false
}> => {
	if (source === "study" || source === "personal") {
		let responseData = projectsData.filter(
			project => project.type === source
		)

		const data: Card[] | false = await Promise.all(
			responseData.map(async (item: any) =>
				setPosts(item, classes, source)
			)
		)

		return {
			status: 200,
			data: data
		}
	}

	if (source === "dribbble" || source === "instagram")
		try {
			// Create new URL
			let fetchURL = new URL(url)

			// Create a new instance of URLSearchParams
			const searchParams = new URLSearchParams()

			// Set each property as a search parameter
			if (params) {
				const keys = Object.keys(params)
				keys.forEach(key => {
					const value = params[key]
					if (value !== undefined) {
						searchParams.set(key, value.toString())
					}
				})
			}

			// Set search params
			fetchURL.search = searchParams.toString()

			// Await fetch
			const response = await fetch(fetchURL.href)

			// Await response data
			let responseData = await response.json()

			// Source is Instagram
			if (source === "instagram") responseData = responseData?.items

			const data: Card[] | false =
				response.status === 200 &&
				(await Promise.all(
					responseData.map(async (item: any) =>
						setPosts(item, classes, source)
					)
				))

			return {
				status: response.status,
				message: response.statusText,
				data: data
			}
		} catch (error) {
			console.log(error)
		}

	return { status: 404, data: false }
}

interface Source {
	url: string
	params: FetchParams | null
	classes: string[]
	type: string
}

const sources: Source[] = [
	{
		url: "",
		params: null,
		classes: ["col-12", "col-md-6", "card", "card-dribbble"],
		type: "study"
	},
	{
		url: "",
		params: null,
		classes: ["col-12", "col-md-6", "card", "card-dribbble"],
		type: "personal"
	},
	{
		url: "https://api.dribbble.com/v2/user/shots",
		params: {
			access_token: process.env.DRIBBBLE_TOKEN!,
			per_page: 3
		},
		classes: ["col-12", "col-md-4", "card", "card-dribbble"],
		type: "dribbble"
	},
	{
		url: "https://graph.instagram.com/v14.0/me/media",
		params: {
			access_token: process.env.INSTAGRAM_TOKEN!,
			fields: "id,caption,media_url,permalink",
			limit: 3
		},
		classes: ["col-12", "col-md-4", "card", "card-instagram"],
		type: "instagram"
	}
	// Add other sources here
]

async function fetchDataFromSource(projects: Project[], source: Source) {
	try {
		const data = await preparePosts(
			source.url,
			source.params,
			source.classes,
			source.type
		)

		if (data?.status === 200) {
			projects.push({
				kicker: indexCopy.sections[source.type].kicker,
				heading: indexCopy.sections[source.type].title,
				posts: data.data
			})
		}
	} catch (error) {
		// Handle any potential errors here
		console.error(`Error fetching data from ${source.type}:`, error)
	}
}

export async function fetchAllData() {
	const projects: Project[] = []

	for (const source of sources) {
		await fetchDataFromSource(projects, source)
	}

	return projects
}

export default async () => {
	const projects: Project[] = await fetchAllData()

	return (
		<>
			<Header />

			<span
				className={`text-center d-none d-md-block ${indexStyles.background}`}
			>
				designer
			</span>

			{/* Hero section mouse scroller */}
			<div className={`d-none d-md-block ${indexStyles.scrolldown}`}>
				<div className={indexStyles.mousey}>
					<div className={indexStyles.scroller}></div>
				</div>
			</div>

			<Hero
				hero={indexStyles.hero}
				cta={indexStyles.cta}
				imageClass={indexStyles.image}
			/>

			{projects?.map(
				(project: Project, key: number) =>
					project.posts !== false && (
						<ListProjects
							key={key}
							kicker={project.kicker}
							heading={project.heading}
							projects={project.posts}
							// source={project.source}
						/>
					)
			)}

			{/* Let's work together */}
			<LetsWorkTogether />
		</>
	)
}
