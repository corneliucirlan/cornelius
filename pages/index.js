import Head from 'next/head'

import getPosts from '../components/get-posts'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/frontpage/hero'
import ListProjects from '../components/frontpage/list-projects'
import LetsWorkTogether from '../components/work-together'
import projectsData from '../components/data/projects'
import { getPhotoData } from '../utils/images'
import { indexCopy } from '../components/data/site-copy'

import styles from '../sass/modules/Index.module.sass'

export const getServerSideProps = async () => {

	const setPosts = async (data, classes, source) => {
		return {
			image: await getPhotoData(source === null ? data.imageURL : (source === 'dribbble' ? data.images.hidpi : data.media_url)),
			title: source !== 'instagram' ? data.title : null,
			caption: source !== 'dribbble' ? data.caption : data.description,
			permalink: source !== 'dribbble' ? data.permalink : data.html_url,
			classes: classes,
			source: source
		}
	}

	// Case Studies posts
	// console.log(projectsData)
	let caseStudies = projectsData.filter(project => project.type === 'study')
	let studies = await Promise.all(caseStudies.map( async study =>
		setPosts(study, [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ], null)
	))
	// let studies = {}

	// Personal Projects posts
	let personalProjects = projectsData.filter(project => project.type === 'personal')
	let projects = await Promise.all(personalProjects.map( async project =>
		setPosts(project, [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ], null)	
	))
	// let projects = {}

	// Get latest Dribbble posts
	let dribbbleResult = await getPosts('https://api.dribbble.com/v2/user/shots', {
		access_token: process.env.DRIBBBLE_TOKEN,
		per_page: 2
	})

	let dribbblePosts = await Promise.all(dribbbleResult.map( async dribbbleItem =>
		setPosts(dribbbleItem, [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ], 'dribbble')
	))

	// Get latest IG posts
	let instagramResult = await getPosts('https://graph.instagram.com/v14.0/me/media', {
		access_token: process.env.INSTAGRAM_TOKEN,
		fields: 'id,caption,media_url,permalink',
		limit: 3
	})
	// console.log(instagramResult)

	// let instagramPosts = await Promise.all(instagramResult.data.map( async igPost =>
	// 	setPosts(igPost, [ 'col-12', 'col-md-4', 'card', 'card-instagram' ], 'instagram')
	// ))

	// Return posts
	return {props: {
		studies: studies,
		projectsPersonal: projects,
		dribbblePosts: dribbblePosts,
		// instagramPosts: instagramPosts,
		heroImage: {
			light: await getPhotoData('/images/cc-hero-image-closed-white.png'),
			// dark: await getPhotoData('/images/cc-hero-image-closed.png')
			dark: await getPhotoData('/images/cc-hero-image-closed-darker.png')
		}
		// heroImage: await getPhotoData('/images/cc-hero-image-open.png')
	}}
}

export default ({ studies, projectsPersonal, dribbblePosts, instagramPosts, heroImage }) => {

	const projects = [

		// Case studies
		{ kicker: indexCopy.sections.studies.kicker, heading: indexCopy.sections.studies.title, posts: studies },

		// Personal projects
		{ kicker: indexCopy.sections.personal.kicker, heading: indexCopy.sections.personal.title, posts: projectsPersonal },

		// Latest Dribbble shots
		{ kicker: indexCopy.sections.dribbble.kicker, heading: indexCopy.sections.dribbble.title, posts: dribbblePosts },

		// Latest Instagram posts
		// { kicker: indexCopy.sections.instagram.kicker, heading: indexCopy.sections.instagram.title, posts: instagramPosts }
	]

	return (
		<div className='container'>
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<Header />

			{/* Hero section mouse scroller */}
			<div className={`d-none d-md-block ${styles.scrolldown}`}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</div>

			<main>
				<span className={`text-center d-none d-md-block ${styles.background}`}>designer</span>

				{/* Hero Section */}
				<Hero
					hero={styles.hero}
					cta={styles.cta}
					image={heroImage}
					imageClass={styles.image}
				/>

				{projects.map((project, key) =>
					<ListProjects
						key={key}
						kicker={project.kicker}
						heading={project.heading}
						projects={project.posts}
						source={project.source}
					/>
				)}

				{/* Let's work together */}
				<LetsWorkTogether />
			</main>

			<Footer />
		</div>
	)
}
