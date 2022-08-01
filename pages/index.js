import Head from 'next/head'

import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

import styles from '../sass/modules/Index.module.sass'

export default ({dribbblePosts, igPosts}) => {

	return (
		<div className='container'>
		{/* <div className='container-fluid'> */}
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<Header />

			{/* Hero section mouse scroller */}
			<div className={styles.scrolldown}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</div>

			{/* Side contact me button */}
			<a href='/contact' className='side-contact'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
					<path id="Path_16" data-name="Path 16" d="M18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v11.25A1.875,1.875,0,0,0,1.875,79h16.25A1.875,1.875,0,0,0,20,77.125V65.875A1.875,1.875,0,0,0,18.125,64Zm0,1.875v1.594c-.876.713-2.272,1.822-5.257,4.16-.658.517-1.961,1.761-2.868,1.746-.907.015-2.21-1.229-2.868-1.746-2.985-2.337-4.381-3.446-5.257-4.16V65.875ZM1.875,77.125v-7.25c.9.713,2.164,1.713,4.1,3.228.854.672,2.349,2.156,4.026,2.147,1.669.009,3.145-1.453,4.026-2.146,1.935-1.515,3.2-2.516,4.1-3.229v7.25Z" transform="translate(0 -64)" fill="#fff"/>
				</svg>
				<span>Contact me</span>
			</a>

			<main>
			{/* <main className='container'> */}
				<span className={`text-center ${styles.background}`}>designer</span>

				{/* Hero Section */}
				<section className={`row ${styles.hero}`}>
					<div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
						<h4 className='text-uppercase'>Corneliu Cîrlan</h4>
						<h1>Website and user experience designer</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh.</p>
						<div className='d-flex justify-content-start align-items-center'>
							<a className='btn btn-primary' target='_self' href='#'>Let's work together</a>
							<span className='btn-divider'>or</span>
							<a className='btn btn-primary' target='_self' href='#'>Read about me</a>
						</div>
					</div>
				</section>

				{/* Curated Projects Section */}
				{/* <section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Curated Projects</h4>
					<h1>Case studies</h1>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} source='dribbble' key={index} />
					)}
				</section> */}

				{/* Personal Projects Section */}
				{/* <section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Side Hussles</h4>
					<h1>Personal Projects</h1>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} source='dribbble' key={index} />
					)}
				</section> */}

				{/* Latest on Dribbble Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Whst's new</h4>
					<h1>Latest on Dribbble</h1>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} width='6' source='dribbble' key={index} />
					)}
				</section>

				{/* Latest on Instagram Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Whst's new</h4>
					<h1>Latest on Instagram</h1>
					{igPosts.data.map((shot, index) =>
						<Card data={shot} width='4' source='instagram' classes=' d-flex justify-content-center align-items-center flex-column' key={index} />
					)}
				</section>

				{/* Let's work together */}
				<section className={`row text-center ${styles.index}`}>
					<h4 className='text-uppercase'>Have a project in mind?</h4>
					<a href='/contact' className='btn btn-primary btn-h1' target='_self'>Let's work together</a>
				</section>

			</main>

			<Footer />
		</div>
	)
}

export async function getStaticProps() {

	const POSTS_DRIBBBLE = 4
	const POSTS_INSTAGRAM = 6

	// Get latest shots from Dribbble
	let response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_TOKEN}&per_page=${POSTS_DRIBBBLE}`)
	let dribbblePosts = await response.json()

	// Get latest IG posts
	response = await fetch(`https://graph.instagram.com/v14.0/me/media?fields=id,caption,media_url,permalink&limit=${POSTS_INSTAGRAM}&access_token=${process.env.INSTAGRAM_TOKEN}`)
	let igPosts = await response.json()

	// Return latest shots
	return {props: {dribbblePosts: dribbblePosts, igPosts: igPosts}}
}
