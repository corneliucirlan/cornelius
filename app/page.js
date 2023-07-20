import Header from "../components/header"
import projectsData from "../components/data/projects"
import { indexCopy } from "../components/data/site-copy"
import { getPosts, setPosts } from "../utils/posts"
import Hero from "../components/homepage/hero"
import ListProjects from "../components/homepage/list-projects"
import LetsWorkTogether from "../components/work-together"
import indexStyles from "../sass/modules/index.module.sass"

export default async () => {
	// Function to fetch and set posts
	async function fetchAndSetPosts(data, classNames, source) {
		return Promise.all(
			data.map(async item => {
				return setPosts(item, classNames, source)
			})
		)
	}

	// Fetch and set case studies posts
	let caseStudies = projectsData.filter(project => project.type === "study")
	let studies = await fetchAndSetPosts(
		caseStudies,
		["col-12", "col-md-6", "card", "card-dribbble"],
		null
	)

	// Fetch and set personal projects posts
	let personalProjects = projectsData.filter(
		project => project.type === "personal"
	)
	let personal = await fetchAndSetPosts(
		personalProjects,
		["col-12", "col-md-6", "card", "card-dribbble"],
		null
	)

	// Fetch and set Dribbble posts
	let dribbbleResult = await getPosts(
		"https://api.dribbble.com/v2/user/shots",
		{
			access_token: process.env.DRIBBBLE_TOKEN,
			per_page: 3
		}
	)
	let dribbblePosts =
		dribbbleResult.status === 200 &&
		(await fetchAndSetPosts(
			dribbbleResult.data,
			["col-12", "col-md-4", "card", "card-dribbble"],
			"dribbble"
		))

	// Fetch and set Instagram posts
	let instagramResult = await getPosts(
		"https://graph.instagram.com/v14.0/me/media",
		{
			access_token: process.env.INSTAGRAM_TOKEN,
			fields: "id,caption,media_url,permalink",
			limit: 3
		}
	)
	let instagramPosts =
		instagramResult.status === 200 &&
		(await fetchAndSetPosts(
			instagramResult.data.data,
			["col-12", "col-md-4", "card", "card-instagram"],
			"instagram"
		))

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
		}
	]

	// Add Dribbble posts if fetching worked
	dribbbleResult.status === 200 &&
		projects.push({
			kicker: indexCopy.sections.dribbble.kicker,
			heading: indexCopy.sections.dribbble.title,
			posts: dribbblePosts
		})

	// Add Instagram posts if fetching worked
	instagramResult.status === 200 &&
		projects.push({
			kicker: indexCopy.sections.instagram.kicker,
			heading: indexCopy.sections.instagram.title,
			posts: instagramPosts
		})

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
