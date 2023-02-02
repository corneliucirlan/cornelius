import projectsData from "../components/data/projects"
import { indexCopy } from "../components/data/site-copy"
import { getPhotoData } from "../utils/images"
import getPosts from "../components/get-posts"
import Hero from "../components/homepage/hero"
import ListProjects from "../components/homepage/list-projects"
import LetsWorkTogether from "../components/work-together"

import indexStyles from "../sass/modules/index.module.sass"

const setPosts = async (data, classes, source) => {
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

export default async function Home() {
	// Hero Image
	// const heroImage = {
	// 	light: await getPhotoData("/images/cc-hero-image-closed-white.png"),
	// 	dark: await getPhotoData("/images/cc-hero-image-closed-darker.png")
	// }

	// Case Studies posts
	let caseStudies = projectsData.filter((project) => project.type === "study")
	let studies = await Promise.all(
		caseStudies.map(async (study) =>
			setPosts(
				study,
				["col-12", "col-md-6", "card", "card-dribbble"],
				null
			)
		)
	)

	// Personal Projects posts
	let personalProjects = projectsData.filter(
		(project) => project.type === "personal"
	)
	let personal = await Promise.all(
		personalProjects.map(async (project) =>
			setPosts(
				project,
				["col-12", "col-md-6", "card", "card-dribbble"],
				null
			)
		)
	)

	// Get latest Dribbble posts
	let dribbbleResult = await getPosts(
		"https://api.dribbble.com/v2/user/shots",
		{
			access_token: process.env.DRIBBBLE_TOKEN,
			per_page: 3
		}
	)

	let dribbblePosts = await Promise.all(
		dribbbleResult.map(async (dribbbleItem) =>
			setPosts(
				dribbbleItem,
				["col-12", "col-md-4", "card", "card-dribbble"],
				"dribbble"
			)
		)
	)

	// Get latest IG posts
	let instagramResult = await getPosts(
		"https://graph.instagram.com/v14.0/me/media",
		{
			access_token: process.env.INSTAGRAM_TOKEN,
			fields: "id,caption,media_url,permalink",
			limit: 3
		}
	)

	let instagramPosts = await Promise.all(
		instagramResult.data.map(async (igPost) =>
			setPosts(
				igPost,
				["col-12", "col-md-4", "card", "card-instagram"],
				"instagram"
			)
		)
	)

	const projects = [
		// Case studies
		{
			kicker: indexCopy.sections.studies.kicker,
			heading: indexCopy.sections.studies.title,
			posts: studies
		},

		// Personal projects
		{
			kicker: indexCopy.sections.personal.kicker,
			heading: indexCopy.sections.personal.title,
			posts: personal
		},

		// Latest Dribbble shots
		{
			kicker: indexCopy.sections.dribbble.kicker,
			heading: indexCopy.sections.dribbble.title,
			posts: dribbblePosts
		},

		// Latest Instagram posts
		{
			kicker: indexCopy.sections.instagram.kicker,
			heading: indexCopy.sections.instagram.title,
			posts: instagramPosts
		}
	]

	return (
		<>
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

			{projects.map((project, key) => (
				<ListProjects
					key={key}
					kicker={project.kicker}
					heading={project.heading}
					projects={project.posts}
					source={project.source}
				/>
			))}

			{/* Let's work together */}
			<LetsWorkTogether />
		</>
	)
}
