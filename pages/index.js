import Head from 'next/head'

import getPosts from '../components/get-posts'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/frontpage/hero'
import ListProjects from '../components/frontpage/list-projects'
import LetsWorkTogether from '../components/work-together'
import { caseStudies, personalProjects } from '../components/data/projects'

import styles from '../sass/modules/Index.module.sass'
import { getPhotoData } from '../utils/images'


export const getServerSideProps = async () => {

	// Case Studies posts
	let studies = await Promise.all(caseStudies.map( async study => {
		const post = {}
		post.image = await getPhotoData(study.imageURL)

		post.title = study.title
		post.caption = study.caption
		post.permalink = study.permalink
		post.classes = [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ]
		post.source = null

		return post
	}))

	// Personal Projects posts
	let projects = await Promise.all(personalProjects.map( async study => {
		const post = {}
		post.image = await getPhotoData(study.imageURL)

		post.title = study.title
		post.caption = study.caption
		post.permalink = study.permalink
		post.classes = [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ]
		post.source = null

		return post
	}))
	
	// Get latest Dribbble posts
	let dribbbleResult = await getPosts('https://api.dribbble.com/v2/user/shots', {
		access_token: process.env.DRIBBBLE_TOKEN,
		per_page: 2
	})
	
	const dribbblePosts = await Promise.all(dribbbleResult.map(async dribbbleItem => {
		const post = {}
		post.image = await getPhotoData(dribbbleItem.images.hidpi)

		post.title = dribbbleItem.title
		post.caption = dribbbleItem.description
		post.permalink = dribbbleItem.html_url
		post.classes = [ 'col-12', 'col-md-6', 'card', 'card-dribbble' ]
		post.source = 'dribbble'

		return post
	}))

	// Get latest IG posts
	let instagramResult = await getPosts('https://graph.instagram.com/v14.0/me/media', {
		access_token: process.env.INSTAGRAM_TOKEN,
		fields: 'id,caption,media_url,permalink',
		limit: 3
	})
	// console.log(instagramResult)

	// const instagramPosts = await Promise.all(instagramResult.data.map(async instagramResult => {

	// 	const post = {}
	// 	post.image = await getPhotoData(instagramResult.media_url)

	// 	post.title = null
	// 	post.caption = instagramResult.caption
	// 	post.permalink = instagramResult.permalink
	// 	post.classes = [ 'col-12', 'col-md-4', 'card', 'card-instagram' ]
	// 	post.source = 'instagram'

	// 	return post
	// }))

	// Return posts
	return {props: {
		studies: studies,
		projectsPersonal: projects,
		dribbblePosts: dribbblePosts,
		// instagramPosts: instagramPosts,
		// heroImage: await getPhotoData('/images/cc-hero-image-closed.png')
		heroImage: await getPhotoData('/images/cc-hero-image-open.png')
	}}
}

export default ({ studies, projectsPersonal, dribbblePosts, instagramPosts, heroImage }) => {

	const projects = [

		// Case studies
		{ kicker: 'Curated projects', heading: 'Case studies', posts: studies },

		// Personal projects
		{kicker: 'Side hussles', heading: 'Personal projects', posts: projectsPersonal },

		// Latest Dribbble shots
		{ kicker: "What's new", heading: 'Latest on Dribbble', posts: dribbblePosts },

		// Latest Instagram posts
		// { kicker: 'On socials', heading: 'Latest on Instagram', posts: instagramPosts }
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
