import Head from 'next/head'

import Header from '../components/Header'

import styles from '../sass/modules/Index.module.sass'

export default (posts) => {

	console.log(posts)

	return (
		<div className='container'>
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<Header />

			<div className={styles.scrolldown}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</div>

			<main>
				<span className={`text-center ${styles.background}`}>designer</span>

				{/* Hero Section */}
				<section className={`row ${styles.hero}`}>
					<div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
						<h4 className='text-uppercase'>Corneliu Cîrlan</h4>
						<h1>Website and user experience designer</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh. Nam et mauris ac massa ultricies malesuada. Aliquam congue in mauris eu lobortis.</p>
					</div>
				</section>

				{/* Curated Projects Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Curated Projects</h4>
					<h1>Case studies</h1>
					{posts.dribbblePosts.map((shot, index) =>
						<div className='col-12 col-md-4' key={index}>
							<img src={shot.images.normal} />
						</div>
					)}
				</section>

				{/* Personal Projects Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Side Hussles</h4>
					<h1>Personal Projects</h1>
					{posts.dribbblePosts.map((shot, index) =>
						<div className='col-12 col-md-4' key={index}>
							<img src={shot.images.normal} />
						</div>
					)}
				</section>

				{/* Latest on Dribbble Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Whst's new</h4>
					<h1>Latest on Dribbble</h1>
					{posts.dribbblePosts.map((shot, index) =>
						<div className='col-12 col-md-4' key={index}>
							<img src={shot.images.normal} />
						</div>
					)}
				</section>

				{/* Latest on Instagram Section */}
				<section className={`row ${styles.index}`}>
					<h4 className='text-uppercase'>Whst's new</h4>
					<h1>Latest on Instagram</h1>
					{posts.igPosts.data.map((shot, index) =>
						<div className='col-12 col-md-4' key={index}>
							<img src={shot.media_url} />
						</div>
					)}
				</section>

				{/* Let's work together */}
				<section className={`row text-center ${styles.index}`}>
					<h4 className='text-uppercase'>Have a project in mind?</h4>
					<h1><a href='#'>Let's work together</a></h1>
				</section>

			</main>
		</div>
	)
}

export async function getStaticProps() {

	const POSTS = 3

	// Get latest shots from Dribbble
	let response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_TOKEN}&per_page=${POSTS}`)
	let dribbblePosts = await response.json()

	// Get latest IG posts
	response = await fetch(`https://graph.instagram.com/v14.0/me/media?fields=id,caption,media_url&limit=${POSTS}&access_token=${process.env.INSTAGRAM_TOKEN}`)
	let igPosts = await response.json()

	// Return latest shots
	return {props: {dribbblePosts: dribbblePosts, igPosts: igPosts}}
}
